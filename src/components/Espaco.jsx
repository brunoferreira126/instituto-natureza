import { useState } from "react";
import "./espaco.css";

export default function Espaco() {

  const imagens = Array.from({ length: 49 }, (_, i) => `/espaco/espaco ${i + 1}.jpeg`);

  const [imagemAtiva, setImagemAtiva] = useState(null);

  return (
    <section className="espaco reveal" id="espaco">

      <h2 className="espaco-titulo">Nosso Espaço</h2>

      <p className="espaco-subtitulo">
        Um ambiente acolhedor em contato direto com a natureza,
        pensado para o desenvolvimento e bem-estar.
      </p>

      <div className="espaco-grid">
        {imagens.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Espaço ${index + 1}`}
            onClick={() => setImagemAtiva(img)}
          />
        ))}
      </div>

      {/* LIGHTBOX */}
      {imagemAtiva && (
        <div className="lightbox" onClick={() => setImagemAtiva(null)}>
          <img src={imagemAtiva} alt="Imagem ampliada" />
        </div>
      )}

    </section>
  );
}