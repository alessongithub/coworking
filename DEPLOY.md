# 🚀 Guia de Deploy - Hub Co working

## Deploy na Netlify

### Passo a Passo:

1. **Instalar dependências localmente (opcional, para testar)**
   ```bash
   npm install
   ```

2. **Testar localmente**
   ```bash
   npm run dev
   ```
   Acesse: http://localhost:3000

3. **Build de produção (teste local)**
   ```bash
   npm run build
   ```

4. **Conectar ao Netlify**
   - Acesse [netlify.com](https://www.netlify.com)
   - Faça login com sua conta GitHub
   - Clique em "Add new site" > "Import an existing project"
   - Selecione o repositório: `alessongithub/coworking`
   - O Netlify detectará automaticamente as configurações do `netlify.toml`

5. **Configurações no Netlify**
   - Build command: `npm run build` (já configurado)
   - Publish directory: `out` (já configurado)
   - Node version: 18.x ou superior

6. **Deploy**
   - O deploy será automático após o push no GitHub
   - Ou clique em "Deploy site" no painel do Netlify

## 📝 Notas Importantes

- O site usa **static export** do Next.js, ideal para Netlify
- As imagens estão em `/public/images/`
- O botão WhatsApp está configurado para: (11) 94714-6196
- O email de contato é: coworking@evoqueassessoria.com.br

## 🔧 Variáveis de Ambiente (se necessário no futuro)

Se precisar adicionar variáveis de ambiente:
1. No Netlify: Site settings > Environment variables
2. Adicione as variáveis necessárias
3. Faça um novo deploy

## ✅ Checklist Pós-Deploy

- [ ] Testar todas as páginas
- [ ] Verificar botão WhatsApp
- [ ] Testar formulário de contato
- [ ] Verificar imagens da galeria
- [ ] Testar responsividade (mobile e desktop)
- [ ] Verificar SEO (meta tags)

