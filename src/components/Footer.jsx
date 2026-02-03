import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer reveal">
      <div className="footer-container">

        {/* INSTITUCIONAL */}
        <div className="footer-col">
          <h3>Instituto da Natureza</h3>
          <p>
            Cuidando de vidas com amor, inclusão e conexão com a natureza.
          </p>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="footer-col">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#sobre">Quem Somos</a></li>
            <li><a href="#diferencial">Nosso Diferencial</a></li>
            <li><a href="#impacto">Nosso Impacto</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        {/* CONTATO */}
        <div className="footer-col">
          <h4>Contato</h4>

          <p>
            <i className="fa-brands fa-whatsapp"></i>
            <a
              href="https://wa.me/5585998513856"
              target="_blank"
              rel="noreferrer"
            >
              (85) 99851-3856
            </a>
          </p>

          <p>
            <i className="fa-solid fa-envelope"></i>
            institutodanaturezapindoretama@gmail.com
          </p>

          <p>
            <i className="fa-solid fa-location-dot"></i>
            Estr. Barrocão – Pindoretama/CE
          </p>
        </div>
      </div>

      {/* LOGO GRANDE */}
    <div className="footer-logo">
  <img src="/logo/LOGO.png" alt="Logo Escola da Natureza" />
</div>


      {/* LINHA FINAL */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Instituto da Natureza •
          CNPJ: 59.637.643/0001-93
        </p>
      </div>
    </footer>
  );
}
