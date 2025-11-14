#!/bin/bash
# Script de Deploy para GitHub
# Faz build, commit e push automático

echo "🚀 Iniciando deploy..."

# 1. Build do projeto
echo "📦 Fazendo build do projeto..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Erro no build! Deploy cancelado."
    exit 1
fi

# 2. Adicionar todos os arquivos
echo "➕ Adicionando arquivos ao Git..."
git add .

# 3. Verificar se há mudanças
if [ -z "$(git status --porcelain)" ]; then
    echo "ℹ️  Nenhuma mudança para commitar."
    exit 0
fi

# 4. Commit
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
echo "💾 Fazendo commit..."
git commit -m "Deploy automático - $TIMESTAMP"

# 5. Push para GitHub
echo "📤 Enviando para GitHub..."
git push origin master || git push origin main

echo "✅ Deploy concluído com sucesso!"
echo "🌐 O Netlify fará o deploy automaticamente após o push."

