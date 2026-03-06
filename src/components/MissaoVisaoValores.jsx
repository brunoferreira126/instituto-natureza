import "./missao.css";

export default function MissaoVisaoValores() {
  return (
    <section className="missao" id="missao">
      <div className="missao-container">

        <h2 className="missao-titulo">Missão, Visão e Valores</h2>

        <div className="missao-grid">

          {/* MISSÃO */}
          <div className="missao-card reveal">
            <div className="missao-icon">
              🌱
            </div>

            <h3>Missão</h3>

            <p>
              Promover educação, cultura e saúde integral e compartilhar
              felicidade autêntica.
            </p>
          </div>


          {/* VISÃO */}
          <div className="missao-card reveal">
            <div className="missao-icon">
              🌍
            </div>

            <h3>Visão</h3>

            <p>
              Ser referência nacional em educação ambiental e
              terapia assistida por animais.
            </p>
          </div>


          {/* VALORES */}
          <div className="missao-card reveal">
            <div className="missao-icon">
              ❤️
            </div>

            <h3>Valores</h3>

            <ul>
              <li>Todos fazemos parte da natureza</li>
              <li>Profissionalismo, ética e respeito</li>
              <li>Sustentabilidade</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}