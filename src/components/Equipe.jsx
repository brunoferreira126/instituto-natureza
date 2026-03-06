import "./equipe.css";

export default function Equipe() {
  return (
    <section className="equipe" id="equipe">

      <div className="equipe-container">

        <h2 className="equipe-titulo">Nossa Equipe</h2>

        {/* PRESIDENTE */}
        <div className="presidente">

          <img
            src="/equipe/raison.jpg"
            alt="Raison Pinheiro"
            className="presidente-img"
          />

          <div className="presidente-texto">

            <h3>Raison Pinheiro – Presidente do Instituto da Natureza</h3>

            <p>
              Raison Pinheiro é Professor, Psicólogo, Equoterapeuta,
              Psicopedagogo e Mestrando em Educação.
            </p>

            <p>
              Atuou por anos como diretor de consultoria do Sistema Ari de Sá,
              Pleno, Conquista e International School. Foi gerente de educação
              do Sesc e diretor de diversas escolas particulares.
            </p>

            <p>
              Atualmente trabalha com desenvolvimento de projetos educacionais
              para escolas, é palestrante, consultor educacional, mantenedor da
              Escola da Natureza e presidente do Instituto da Natureza.
            </p>

          </div>

        </div>

        {/* PROFISSIONAIS */}
        <div className="profissionais">

          <h3>Nossos Profissionais</h3>

          <ul className="lista-profissionais">

            <li><strong>Raison Pinheiro</strong> – Psicólogo e Psicopedagogo</li>

            <li><strong>Sandra Pinheiro</strong> – Fonoaudióloga, Enfermeira, Psicomotricista</li>

            <li><strong>Daniel Muniz</strong> – Educador Físico e Psicomotricista</li>

            <li><strong>Vitória Barbosa</strong> – Fisioterapeuta</li>

            <li><strong>Gabriela Miranda</strong> – Veterinária</li>

            <li><strong>Mateus Rocha</strong> – Equitador</li>

            <li><strong>Breno Pinheiro</strong> – Veterinário</li>

            <li><strong>Levi Soares</strong> – Estagiário de Fisioterapia</li>

            <li><strong>Mariana Barros</strong> – Estagiária de Enfermagem</li>

            <li><strong>Larissa Barbosa</strong> – Estagiária de Enfermagem</li>

            <li><strong>Saulo Pinheiro</strong> – Menor Aprendiz</li>

            <li><strong>Augusto Pinheiro</strong> – Menor Aprendiz</li>

            <li><strong>Maycon</strong> – Menor Aprendiz</li>

            <li><strong>Sergio</strong> – Casqueador</li>

            <li><strong>Carlos</strong> – Serviços Gerais</li>

            <li><strong>Cristian</strong> – Serviços Gerais</li>

            <li><strong>Nenem</strong> – Conservação e Limpeza</li>

            <li><strong>Celma</strong> – Conservação e Limpeza</li>

          </ul>

        </div>

        {/* LOGO FINAL */}
        <div className="logo-final">

          <img
            src="/logo/LOGO.png"
            alt="Instituto da Natureza"
          />

        </div>

      </div>

    </section>
  );
}

