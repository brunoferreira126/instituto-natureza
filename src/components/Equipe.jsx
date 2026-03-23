import "./equipe.css";

export default function Equipe() {

  const profissionais = [
   
    { nome: "Sandra Pinheiro", cargo: "Fonoaudióloga, Enfermeira, Psicomotricista", img: "/equipe/sandra.jpeg" },
    { nome: "Daniel Muniz", cargo: "Educador Físico e Psicomotricista", img: "/equipe/daniel.jpeg" },
    { nome: "Vitória Barbosa", cargo: "Fisioterapeuta", img: "/equipe/vitoria.jpeg" },
    { nome: "Gabriela Miranda", cargo: "Veterinária", img: "/equipe/gabriela.jpeg" },
    { nome: "Mateus Rocha", cargo: "Equitador", img: "/equipe/mateus.jpeg" },
    { nome: "Breno Pinheiro", cargo: "Veterinário", img: "/equipe/breno.jpeg" },
    { nome: "Levi Soares", cargo: "Estagiário de Fisioterapia", img: "/equipe/levi.jpeg" },
    { nome: "Mariana Barros", cargo: "Estagiária de Enfermagem", img: "/equipe/mariana.jpeg" },
    { nome: "Larissa Barbosa", cargo: "Estagiária de Enfermagem", img: "/equipe/larissa.jpeg" },
    { nome: "Saulo Pinheiro", cargo: "Menor Aprendiz", img: "/equipe/saulo.jpeg" },
    { nome: "Augusto Pinheiro", cargo: "Menor Aprendiz", img: "/equipe/augusto.jpeg" },
    { nome: "Maycon", cargo: "Menor Aprendiz PCD", img: "/equipe/maycon.jpeg" },
    { nome: "Sergio", cargo: "Casqueador", img: "/equipe/sergio.jpeg" },
    { nome: "Carlos", cargo: "Serviços Gerais", img: "/equipe/carlos.jpeg" },
    { nome: "Cristian", cargo: "Serviços Gerais", img: "/equipe/cristian.jpeg" },
    { nome: "Nenem", cargo: "Conservação e Limpeza", img: "/equipe/nenem.jpeg" },
    { nome: "Celma", cargo: "Conservação e Limpeza", img: "/equipe/celma.jpeg" },
  ];

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

        {/* PROFISSIONAIS COM FOTO */}
        <div className="profissionais">

          <h3>Nossos Profissionais</h3>

          <div className="grid-profissionais">
            {profissionais.map((p, index) => (
              <div className="card-profissional" key={index}>
                <img src={p.img} alt={p.nome} />
                <h4>{p.nome}</h4>
                <p>{p.cargo}</p>
              </div>
            ))}
          </div>

        </div>

        {/* LOGO FINAL */}
        <div className="logo-final">
          <img src="/logo/LOGO.png" alt="Instituto da Natureza" />
        </div>

      </div>
    </section>
  );
}