import { useState, useEffect } from "react";
import "./leituras.css";

function Leituras() {

  const livros = [
    {
      titulo: "A Última Criança na Natureza",
      autor: "Richard Louv",
      imagem: "/livros/ultima-crianca.jpg",
      descricao:
        "Mostra como o afastamento da natureza impacta o desenvolvimento das crianças.",
    },
    {
      titulo: "A Geração Ansiosa",
      autor: "Jonathan Haidt",
      imagem: "/livros/geracao-ansiosa.jpg",
      descricao:
        "Analisa o impacto das redes sociais na saúde mental das novas gerações.",
    },
    {
      titulo: "Ideias para Adiar o Fim do Mundo",
      autor: "Ailton Krenak",
      imagem: "/livros/adiar-fim-mundo.jpg",
      descricao:
        "Reflexões profundas sobre humanidade e natureza.",
    },
    {
      titulo: "O Despertar do Universo Consciente",
      autor: "Marcelo Gleiser",
      imagem: "/livros/despertar-universo.jpg",
      descricao:
        "Uma jornada entre ciência, filosofia e consciência.",
    },
    {
      titulo: "Terapia Assistida por Animais",
      autor: "Diversos autores",
      imagem: "/livros/terapia-animais.jpg",
      descricao:
        "Explica os benefícios terapêuticos da interação com animais.",
    },
    {
      titulo: "Equoterapia: Fundamentos Científicos",
      autor: "Diversos autores",
      imagem: "/livros/equoterapia.jpg",
      descricao:
        "Apresenta os fundamentos científicos da equoterapia.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % livros.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? livros.length - 1 : prev - 1
    );
  };

  // autoplay
  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % livros.length);
  }, 5000);

  return () => clearInterval(interval);
}, [livros.length]);

  return (
    <section className="leituras reveal" id="leituras">

      <h2 className="titulo-leituras">Sugestões de Leitura</h2>

      <p className="subtitulo-leituras">
        Livros que inspiram nossa visão sobre natureza, educação e consciência.
      </p>

      <div className="carrossel">

        <button className="seta esquerda" onClick={prev}>
          ❮
        </button>

        <div className="livros-container">

          {livros.map((livro, i) => {

            const position =
              (i - index + livros.length) % livros.length;

            if (position > 2) return null;

            return (
              <div className="livro-card" key={i}>
                <img src={livro.imagem} alt={livro.titulo} />

                <h3>{livro.titulo}</h3>

                <span>{livro.autor}</span>

                <p>{livro.descricao}</p>
              </div>
            );
          })}

        </div>

        <button className="seta direita" onClick={next}>
          ❯
        </button>

      </div>
    </section>
  );
}

export default Leituras;