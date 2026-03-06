import "./escola.css";

export default function EscolaNatureza() {
  return (
    <section className="escola" id="escola">
      <div className="escola-container">

        {/* LOGO DESTACADA */}
        <div className="escola-logo reveal">
          <img src="/logo/LOGO 2.png" alt="Escola da Natureza" />
        </div>

        {/* TEXTO */}
        <div className="escola-texto reveal">

          <h2>Escola da Natureza</h2>

          <p>
            A <strong>Escola da Natureza</strong> é a entidade mantenedora do
            <strong> Instituto da Natureza</strong>. Trata-se de uma escola de
            educação complementar que se propõe a prevenir e tratar o
            <strong> Transtorno de Déficit da Natureza</strong> em crianças,
            jovens, adultos e idosos.
          </p>

          <p>
            Na Escola da Natureza promovemos
            <strong> Terapias Assistidas por Animais</strong>, com destaque
            especial para a <strong>Equoterapia</strong>, que utiliza a
            interação com cavalos como parte do processo terapêutico.
          </p>

          <p>
            Além dos cavalos, também fazemos uso de
            <strong> carneiros, cachorros, gatos e diversos outros animais</strong>
            no processo terapêutico, proporcionando experiências que estimulam
            o desenvolvimento emocional, cognitivo, social e motor dos
            participantes.
          </p>

        </div>

      </div>
    </section>
  );
}