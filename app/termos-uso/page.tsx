import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso - Hub Co working',
  description: 'Termos e Condições de Uso do Hub Co working',
}

export default function TermosUso() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Termos de Uso</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Aceitação dos Termos</h2>
            <p className="text-gray-600 leading-relaxed">
              Ao acessar e utilizar o site do Hub Co working, você concorda em cumprir e estar vinculado 
              a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve 
              utilizar nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Uso do Site</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Você concorda em usar o site apenas para fins legais e de maneira que não infrinja os 
              direitos de terceiros ou restrinja ou iniba o uso e aproveitamento do site por terceiros.
            </p>
            <p className="text-gray-600 leading-relaxed">
              É proibido utilizar o site para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-2">
              <li>Transmitir conteúdo ilegal, ofensivo ou difamatório</li>
              <li>Violar direitos de propriedade intelectual</li>
              <li>Interferir no funcionamento do site</li>
              <li>Coletar informações de outros usuários sem autorização</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Serviços Oferecidos</h2>
            <p className="text-gray-600 leading-relaxed">
              O Hub Co working oferece serviços de coworking, incluindo salas privativas, mesanino 
              executivo, recepcionista, suporte técnico e outros serviços descritos em nosso site. 
              Os preços e condições estão sujeitos a alterações sem aviso prévio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Propriedade Intelectual</h2>
            <p className="text-gray-600 leading-relaxed">
              Todo o conteúdo do site, incluindo textos, gráficos, logotipos, ícones, imagens e 
              software, é propriedade do Hub Co working ou de seus fornecedores de conteúdo e está 
              protegido por leis de direitos autorais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Limitação de Responsabilidade</h2>
            <p className="text-gray-600 leading-relaxed">
              O Hub Co working não se responsabiliza por danos diretos, indiretos, incidentais ou 
              consequenciais resultantes do uso ou incapacidade de usar o site ou serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Links para Sites de Terceiros</h2>
            <p className="text-gray-600 leading-relaxed">
              Nosso site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo 
              desses sites e não assumimos responsabilidade por eles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Modificações dos Termos</h2>
            <p className="text-gray-600 leading-relaxed">
              Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão 
              em vigor imediatamente após sua publicação no site. É sua responsabilidade revisar 
              periodicamente estes termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Lei Aplicável</h2>
            <p className="text-gray-600 leading-relaxed">
              Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos 
              tribunais competentes de Poá/SP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">9. Contato</h2>
            <p className="text-gray-600 leading-relaxed">
              Para questões sobre estes termos, entre em contato:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700"><strong>E-mail:</strong> contato@evoqueassessoria.com.br</p>
              <p className="text-gray-700"><strong>Telefone:</strong> (11) 94714-6196</p>
              <p className="text-gray-700"><strong>Endereço:</strong> Av. 9 de Julho, Centro, Poá/SP - CEP 08550-100</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">10. Aceitação</h2>
            <p className="text-gray-600 leading-relaxed">
              Ao utilizar nosso site, você confirma que leu, entendeu e concorda com estes Termos de Uso.
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

