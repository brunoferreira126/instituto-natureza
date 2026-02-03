import "./sobre.css";




export default function Sobre() {
  return (
    <section  className="sobre reveal" id="sobre">
      <div className="sobre-container">

        <h2 className="sobre-titulo">Quem Somos</h2>

        <div className="sobre-grid">

          <div className="sobre-coluna">
            <p>
              O <strong>Instituto da Natureza</strong> é uma Organização da
              Sociedade Civil (OSC), uma entidade privada, sem fins lucrativos,
              que atua na defesa dos direitos e no atendimento de necessidades
              sociais de interesse público.
            </p>

            <p>
              Nascemos da <strong>Escola da Natureza</strong> a partir de um
              profundo desejo de atender famílias atípicas em situação de risco,
              promovendo saúde, educação e cultura para pessoas
              neurodivergentes.
            </p>

            <p>
              Dentre outras ações, proporcionamos o tratamento e a reabilitação
              de pessoas atípicas por intermédio de
              <strong> Terapias Assistidas por Animais (TAA)</strong>, utilizando
              a interação com cavalos, cães, gatos, aves, coelhos e muitos outros
              animais, promovendo o bem-estar físico, cognitivo, emocional e
              social.
            </p>

            <p>
              Também desenvolvemos um programa de formação continuada para
              famílias atípicas, por meio de oficinas, cursos, seminários, grupos
              de apoio e muito mais.
            </p>
          </div>

          <div className="sobre-coluna">
            <h3>Atendemos crianças, jovens e adultos com diagnósticos de:</h3>

            <ul className="sobre-lista">
              <li>TEA – Transtorno do Espectro do Autismo</li>
              <li>TDAH – Transtorno de Déficit de Atenção e Hiperatividade</li>
              <li>TOD – Transtorno Opositor Desafiador</li>
              <li>TAG – Transtorno de Ansiedade Generalizada</li>
              <li>TD – Transtorno Depressivo</li>
              <li>Síndrome de Down</li>
              <li>Paralisia Cerebral</li>
              <li>E outras condições</li>
            </ul>

            <p>
              Para darmos sequência e ampliarmos nossos atendimentos,
              <strong> precisamos da sua doação</strong>.
            </p>
          </div>

        </div>


        <div className="sobre-doacao">
          <p>
            Doar é importante porque diminui a desigualdade social, fortalece
            laços, desenvolve a solidariedade e supre necessidades básicas de
            indivíduos e comunidades vulneráveis.
          </p>
          <p>
            <strong>
              Sua doação pode ser abatida do imposto de renda. Doe!
            </strong>
          </p>
        </div>

      </div>
    </section>
  );
}
