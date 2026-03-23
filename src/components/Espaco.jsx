import { useState } from "react";
import "./espaco.css";

export default function Espaco() {

  const todasImagens = Array.from(
    { length: 49 },
    (_, i) => `/espaco/espaco ${i + 1}.jpeg`
  );

  const [visiveis, setVisiveis] = useState(8); // 🔥 começa com poucas

  const carregarMais = () => {
    setVisiveis((prev) => prev + 8);
  };

  const [imagemAtiva, setImagemAtiva] = useState(null);

  return (
    <section className="espaco reveal" id="espaco">

      <h2 className="espaco-titulo">Nosso Espaço</h2>

      <p className="espaco-subtitulo">
        Um ambiente acolhedor em contato direto com a natureza.
      </p>

      <div className="espaco-grid">
        {todasImagens.slice(0, visiveis).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Espaço ${index + 1}`}
            loading="lazy" // 🔥 MUITO IMPORTANTE
            onClick={() => setImagemAtiva(img)}
          />
        ))}
      </div>

      {/* BOTÃO VER MAIS */}
      {visiveis < todasImagens.length && (
        <button className="btn-ver-mais" onClick={carregarMais}>
          Ver mais fotos
        </button>
      )}

      {/* LIGHTBOX */}
      {imagemAtiva && (
        <div className="lightbox" onClick={() => setImagemAtiva(null)}>
          <img src={imagemAtiva} alt="Imagem ampliada" />
        </div>
      )}

    </section>
  );
}