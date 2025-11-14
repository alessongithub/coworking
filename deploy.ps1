# Script de Deploy para GitHub
# Faz build, commit e push automático

Write-Host "🚀 Iniciando deploy..." -ForegroundColor Cyan

# 1. Build do projeto
Write-Host "📦 Fazendo build do projeto..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erro no build! Deploy cancelado." -ForegroundColor Red
    exit 1
}

# 2. Adicionar todos os arquivos
Write-Host "➕ Adicionando arquivos ao Git..." -ForegroundColor Yellow
git add .

# 3. Verificar se há mudanças
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "ℹ️  Nenhuma mudança para commitar." -ForegroundColor Blue
    exit 0
}

# 4. Commit
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Write-Host "💾 Fazendo commit..." -ForegroundColor Yellow
git commit -m "Deploy automático - $timestamp"

# 5. Detectar branch atual
$currentBranch = git branch --show-current
if ([string]::IsNullOrWhiteSpace($currentBranch)) {
    $currentBranch = "master"
}

# 6. Push para GitHub
Write-Host "📤 Enviando para GitHub (branch: $currentBranch)..." -ForegroundColor Yellow
git push origin $currentBranch
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erro ao fazer push. Verifique suas credenciais Git." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Deploy concluído com sucesso!" -ForegroundColor Green
Write-Host "🌐 O Netlify fará o deploy automaticamente após o push." -ForegroundColor Cyan

