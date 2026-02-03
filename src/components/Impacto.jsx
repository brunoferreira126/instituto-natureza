import "./impacto.css";

export default function Impacto() {
  return (
    <section className="impacto reveal" id="impacto">
      <div className="impacto-container">

        <h2 className="impacto-titulo">Nosso Impacto</h2>

        <p className="impacto-subtitulo">
          Cada criança evolui no seu tempo.  
          Nosso trabalho cria oportunidades reais de desenvolvimento.
        </p>

        <div className="impacto-grid">

          {/* TEXTO */}
          <div className="impacto-texto">
            <p>
              Através das <strong>Terapias Assistidas por Animais</strong> e do
              contato direto com a natureza, promovemos avanços significativos
              no desenvolvimento físico, cognitivo, emocional e social das
              crianças.
            </p>

            <p>
              Trabalhamos aspectos como <strong>mobilidade, coordenação
              motora, equilíbrio, atenção, comunicação e autonomia</strong>,
              sempre respeitando a individualidade de cada criança.
            </p>

            <p>
              O ambiente natural reduz estímulos excessivos, favorece a
              concentração e fortalece vínculos afetivos, tornando o processo
              terapêutico mais leve, eficaz e significativo.
            </p>
          </div>

          {/* IMAGENS */}
          <div className="impacto-imagens">
            <img src="/impacto/1.jpeg" alt="Desenvolvimento motor" />
            <img src="/impacto/2.jpeg" alt="Interação com animais" />
            <img src="/impacto/3.jpeg" alt="Evolução cognitiva" />
            <img src="/impacto/4.jpeg" alt="Atividades na natureza" />
          </div>

        </div>

      </div>
    </section>
  );
}
