import { useState, useEffect } from "react";
import "./diferencial.css";

export default function Diferencial() {
  const imagensFamilia = [
    "/familia/1.jpeg",
    "/familia/2.jpeg",
    "/familia/3.jpeg",
    "/familia/4.jpeg",
    "/familia/5.jpeg",
    "/familia/6.jpeg",
    "/familia/7.jpeg",
    "/familia/8.jpeg",
    "/familia/9.jpeg",
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % imagensFamilia.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? imagensFamilia.length - 1 : prev - 1
    );
  };

  /* 🔥 AUTO PLAY CORRETO */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagensFamilia.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imagensFamilia.length]);

  return (
    <section className="diferencial reveal" id="diferencial">
      <div className="diferencial-container">
        <h2 className="diferencial-titulo">Nosso grande diferencial</h2>

        <div className="diferencial-grid">
          {/* TEXTO */}
          <div className="diferencial-texto">
            <p>
              Acreditamos que o <strong>cuidado, o envolvimento e o
              ensinamento da família</strong> são cruciais para o êxito
              no tratamento da criança.
            </p>

            <p>
              Trabalhamos de forma integrada, acolhendo e capacitando as
              famílias, fortalecendo vínculos e criando um ambiente
              seguro, afetivo e contínuo de evolução.
            </p>

            <p className="diferencial-natureza">
              Tudo isso em profundo contato com a natureza.
            </p>
          </div>

          {/* CARROSSEL */}
          <div className="diferencial-carrossel">
            <button onClick={prev}>‹</button>

            <img
              src={imagensFamilia[index]}
              alt="Famílias participando do processo terapêutico"
            />

            <button onClick={next}>›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
