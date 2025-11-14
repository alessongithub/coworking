# Script de Diagnóstico do Next.js

Write-Host "=== DIAGNÓSTICO DO NEXT.JS ===" -ForegroundColor Cyan
Write-Host ""

# 1. Verificar se node_modules existe
Write-Host "1. Verificando node_modules..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "   ✓ node_modules encontrado" -ForegroundColor Green
} else {
    Write-Host "   ✗ node_modules NÃO encontrado - Execute: npm install" -ForegroundColor Red
}

# 2. Verificar se .next existe
Write-Host "2. Verificando .next..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Write-Host "   ✓ .next encontrado" -ForegroundColor Green
} else {
    Write-Host "   ⚠ .next não encontrado (será criado no primeiro build)" -ForegroundColor Yellow
}

# 3. Verificar porta 3000
Write-Host "3. Verificando porta 3000..." -ForegroundColor Yellow
$port = netstat -ano | findstr ":3000"
if ($port) {
    Write-Host "   ⚠ Porta 3000 está em uso" -ForegroundColor Yellow
    Write-Host "   Execute: Get-Process | Where-Object {`$_.ProcessName -like '*node*'} | Stop-Process -Force" -ForegroundColor Cyan
} else {
    Write-Host "   ✓ Porta 3000 está livre" -ForegroundColor Green
}

# 4. Verificar arquivos principais
Write-Host "4. Verificando arquivos principais..." -ForegroundColor Yellow
$files = @("package.json", "next.config.js", "app/layout.tsx", "app/page.tsx")
foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "   ✓ $file" -ForegroundColor Green
    } else {
        Write-Host "   ✗ $file NÃO encontrado" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "=== SOLUÇÃO RECOMENDADA ===" -ForegroundColor Cyan
Write-Host "1. Pare o servidor (Ctrl+C)" -ForegroundColor White
Write-Host "2. Execute: Remove-Item -Recurse -Force .next" -ForegroundColor White
Write-Host "3. Execute: npm run dev" -ForegroundColor White
Write-Host "4. Aguarde a compilação completa" -ForegroundColor White
Write-Host "5. Acesse: http://localhost:3000" -ForegroundColor White

