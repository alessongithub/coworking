import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade - Hub Co working',
  description: 'Política de Privacidade e Proteção de Dados conforme LGPD',
}

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Política de Privacidade</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Informações Gerais</h2>
            <p className="text-gray-600 leading-relaxed">
              A presente Política de Privacidade descreve como o Hub Co working ("nós", "nosso" ou "empresa") 
              coleta, usa e protege suas informações pessoais quando você utiliza nosso site e serviços, 
              em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Dados Coletados</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Coletamos os seguintes tipos de dados pessoais:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li><strong>Dados de Identificação:</strong> Nome, e-mail, telefone</li>
              <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas</li>
              <li><strong>Cookies:</strong> Utilizamos cookies para melhorar sua experiência de navegação</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Finalidade do Tratamento</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Utilizamos seus dados pessoais para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Responder suas solicitações e dúvidas</li>
              <li>Enviar informações sobre nossos serviços</li>
              <li>Melhorar nosso site e serviços</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Compartilhamento de Dados</h2>
            <p className="text-gray-600 leading-relaxed">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, exceto quando 
              necessário para cumprir obrigações legais ou com seu consentimento expresso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Segurança dos Dados</h2>
            <p className="text-gray-600 leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger seus 
              dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Seus Direitos (LGPD)</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Conforme a LGPD, você tem direito a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar anonimização, bloqueio ou eliminação de dados</li>
              <li>Solicitar portabilidade dos dados</li>
              <li>Revogar o consentimento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Utilizamos cookies para melhorar sua experiência. Você pode gerenciar suas preferências 
              de cookies através das configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Contato</h2>
            <p className="text-gray-600 leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700"><strong>E-mail:</strong> contato@evoqueassessoria.com.br</p>
              <p className="text-gray-700"><strong>Telefone:</strong> (11) 94714-6196</p>
              <p className="text-gray-700"><strong>Endereço:</strong> Av. 9 de Julho, Centro, Poá/SP - CEP 08550-100</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">9. Alterações</h2>
            <p className="text-gray-600 leading-relaxed">
              Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página 
              regularmente para se manter informado sobre como protegemos seus dados.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

