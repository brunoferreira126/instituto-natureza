import { useEffect, useState } from "react";
import "./hero.css";

function Hero() {
  const totalImagens = 80;
  const intervaloTempo = 4000;
  const [imagemAtual, setImagemAtual] = useState(1);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagemAtual((prev) => (prev < totalImagens ? prev + 1 : 1));
    }, intervaloTempo);

    return () => clearInterval(intervalo);
  }, []);

  const getImagem = (offset) => {
    let index = imagemAtual + offset;
    if (index < 1) index += totalImagens;
    if (index > totalImagens) index -= totalImagens;
    return index;
  };

  return (
    <section id="hero" className="hero reveal">

      {/* 🔥 FUNDO EM PNG (NÃO MUDA LAYOUT) */}
      <div className="hero-bg">
        <img src="/fundo/hero.png" alt="" />
      </div>

      {/* CONTEÚDO EXISTENTE — NÃO MUDA */}
      <div className="hero-images cinco">

        <img src={`/galeria/${getImagem(-2)}.jpeg`} className="hero-img distante" alt="" />
        <img src={`/galeria/${getImagem(-1)}.jpeg`} className="hero-img lateral" alt="" />

        <div className="hero-center">
          <img
            src={`/galeria/${getImagem(0)}.jpeg`}
            className="hero-img principal"
            alt="Instituto da Natureza"
          />

          <div className="overlay"></div>

          <div className="hero-content">
            <h1>Instituto da Natureza</h1>
            <p>
              Transformando vidas através do cuidado,
              da inclusão e do contato com a natureza.
            </p>

            <div className="hero-buttons">
             

              <a
                href="https://wa.me/5585998513856"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>

        <img src={`/galeria/${getImagem(1)}.jpeg`} className="hero-img lateral" alt="" />
        <img src={`/galeria/${getImagem(2)}.jpeg`} className="hero-img distante" alt="" />

      </div>
    </section>
  );
}

export default Hero;
