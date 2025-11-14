# 🚀 Guia de Deploy Rápido

## Como fazer deploy

Simplesmente execute:

```bash
npm run deploy
```

## O que o script faz automaticamente:

1. ✅ **Build do projeto** - Compila o Next.js para produção
2. ✅ **Adiciona arquivos** - Adiciona todas as mudanças ao Git
3. ✅ **Commit** - Cria um commit com timestamp automático
4. ✅ **Push para GitHub** - Envia para o repositório remoto
5. ✅ **Netlify** - O Netlify detecta automaticamente e faz o deploy

## ⚠️ Importante

- Certifique-se de estar autenticado no Git (credenciais configuradas)
- O repositório remoto já está configurado: `https://github.com/alessongithub/coworking.git`
- A branch padrão é `master`

## 🔧 Primeira vez usando?

Se for a primeira vez, você pode precisar fazer um commit inicial:

```bash
git add .
git commit -m "Initial commit"
git push -u origin master
```

Depois disso, use sempre `npm run deploy`!

## 📝 Mensagem de commit

O script usa automaticamente: `"Deploy automático - YYYY-MM-DD HH:MM:SS"`

Se quiser uma mensagem personalizada, edite o arquivo `deploy.ps1` na linha do commit.

