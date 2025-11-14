# Teste de Funcionamento

Se você está vendo apenas o header, siga estes passos:

1. **Pare o servidor** (Ctrl+C no terminal)

2. **Limpe completamente o cache:**
   ```powershell
   Remove-Item -Recurse -Force .next
   Remove-Item -Recurse -Force node_modules/.cache -ErrorAction SilentlyContinue
   ```

3. **Reinicie o servidor:**
   ```powershell
   npm run dev
   ```

4. **Aguarde a compilação completa** (pode levar 30-60 segundos na primeira vez)

5. **Acesse:** http://localhost:3000

6. **Se ainda não funcionar, verifique o console do navegador (F12)** para ver erros específicos

