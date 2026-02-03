import "./contato.css";

export default function Contato() {
  return (
    <section className="contato reveal" id="contato">
      <div className="contato-container">

        <h2 className="contato-titulo">Entre em contato</h2>

        <p className="contato-subtitulo">
          Estamos prontos para acolher você e sua família.
        </p>

        <div className="contato-grid">

          <div className="contato-infos">

            <div className="contato-bloco">
              <h3>
                <i className="fa-brands fa-whatsapp"></i> WhatsApp
              </h3>
              <a
                href="https://wa.me/5585998513856"
                target="_blank"
                rel="noreferrer"
              >
                (85) 99851-3856
              </a>
              <p>Atendimento rápido e humanizado</p>
            </div>

            <div className="contato-bloco">
              <h3>
                <i className="fa-solid fa-envelope"></i> E-mail
              </h3>
              <a href="mailto:institutodanaturezapindoretama@gmail.com">
                institutodanaturezapindoretama@gmail.com
              </a>
            </div>

            <div className="contato-bloco">
              <h3>
                <i className="fa-solid fa-building"></i> CNPJ
              </h3>
              <p>59.637.643/0001-93</p>
              <span>Organização da Sociedade Civil (OSC)</span>
            </div>

            <div className="contato-bloco">
              <h3>
                <i className="fa-solid fa-location-dot"></i> Endereço
              </h3>
              <p>Estr. Barrocão</p>
              <span>Pindoretama – CE • 62860-000</span>
            </div>

          </div>

          <div className="contato-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.933202091491!2d-38.31329752415301!3d-4.034054044805189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b89f0063dbb7ad%3A0x75ace422fffcd0f3!2sEscola%20da%20Natureza%20Pindoretama!5e0!3m2!1spt-BR!2sbr!4v1770094731620!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Instituto da Natureza"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
