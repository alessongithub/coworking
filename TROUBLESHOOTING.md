# 🔧 Troubleshooting - Problemas Comuns

## Erro: Failed to load main-app.js e app-pages-internals.js

### Solução 1: Limpar cache e reiniciar
```bash
# Parar o servidor (Ctrl+C)
# Limpar cache
Remove-Item -Recurse -Force .next

# Reiniciar
npm run dev
```

### Solução 2: Verificar se a porta está livre
```bash
# Verificar processos na porta 3000
netstat -ano | findstr :3000

# Matar processo se necessário
taskkill /F /PID [PID_NUMBER]
```

### Solução 3: Reinstalar dependências
```bash
# Limpar node_modules
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Reinstalar
npm install

# Iniciar servidor
npm run dev
```

### Solução 4: Verificar erros de compilação
```bash
# Verificar erros de TypeScript
npm run lint

# Build de produção para ver erros
npm run build
```

## Problema: Só aparece o header

Isso geralmente acontece quando:
1. Os componentes não estão sendo renderizados corretamente
2. Há erros de JavaScript que quebram a página
3. O servidor não está compilando corretamente

### Verificar:
1. Abra o Console do navegador (F12)
2. Veja se há erros em vermelho
3. Verifique a aba Network para ver quais arquivos não estão carregando

## Solução Rápida

Se nada funcionar, tente:
```bash
# 1. Parar tudo
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force

# 2. Limpar tudo
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue

# 3. Reinstalar
npm install

# 4. Iniciar
npm run dev
```

## Acessar o site

Depois de iniciar o servidor, acesse:
- http://localhost:3000

Se a porta 3000 estiver ocupada, o Next.js tentará usar a 3001, 3002, etc.

