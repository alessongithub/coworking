# Script de Deploy para GitHub
# Faz build, commit e push automatico

Write-Host "Iniciando deploy..." -ForegroundColor Cyan

# 1. Preparar config de producao
Write-Host "Preparando configuracao de producao..." -ForegroundColor Yellow
Copy-Item -Path "next.config.prod.js" -Destination "next.config.js" -Force

# 2. Build do projeto
Write-Host "Fazendo build do projeto..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Erro no build! Deploy cancelado." -ForegroundColor Red
    exit 1
}

# 3. Adicionar todos os arquivos
Write-Host "Adicionando arquivos ao Git..." -ForegroundColor Yellow
git add .

# 4. Verificar se ha mudancas
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "Nenhuma mudanca para commitar." -ForegroundColor Blue
    exit 0
}

# 5. Commit
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Write-Host "Fazendo commit..." -ForegroundColor Yellow
git commit -m "Deploy automatico - $timestamp"

# 6. Detectar branch atual
$currentBranch = git branch --show-current
if ([string]::IsNullOrWhiteSpace($currentBranch)) {
    $currentBranch = "master"
}

# 7. Push para GitHub
Write-Host "Enviando para GitHub (branch: $currentBranch)..." -ForegroundColor Yellow
git push origin $currentBranch
if ($LASTEXITCODE -ne 0) {
    Write-Host "Erro ao fazer push. Verifique suas credenciais Git." -ForegroundColor Red
    exit 1
}

# 8. Restaurar config de desenvolvimento
Write-Host "Restaurando configuracao de desenvolvimento..." -ForegroundColor Yellow
$devConfig = @"
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Para Netlify
  },
  // output: 'export' só é usado no build de produção
  // Removido para permitir desenvolvimento normal
}

module.exports = nextConfig
"@
Set-Content -Path "next.config.js" -Value $devConfig

Write-Host "Deploy concluido com sucesso!" -ForegroundColor Green
Write-Host "O Netlify fara o deploy automaticamente apos o push." -ForegroundColor Cyan
