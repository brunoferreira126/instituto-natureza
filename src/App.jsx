// Importa os componentes
import { useEffect } from "react";

import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Diferencial from "./components/Diferencial";
import MissaoVisaoValores from "./components/MissaoVisaoValores";
import Impacto from "./components/Impacto";
import EscolaNatureza from "./components/EscolaNatureza";
import Equipe from "./components/Equipe";  
import Leituras from "./components/Leituras";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import { scrollReveal } from "./utils/scrollReveal";


// Função principal do React
function App() {

  // 🔥 efeito de aparição das seções
  useEffect(() => {
    scrollReveal();
  }, []);

  return (
    <>
      {/* Menu */}
      <Menu />

      {/* Hero */}
      <Hero />

      {/* Sobre */}
      <Sobre />

      {/* Diferencial */}
      <Diferencial />
      
      {/* Missão, Visão e Valores */}
      <MissaoVisaoValores />
    

      {/* Impacto */}
      <Impacto />

      {/*Escola da Natureza */}
      <EscolaNatureza />
      
      {/* Equipe */}
      <Equipe />

      {/* Leituras Recomendadas */}
      <Leituras />


      {/* Contato */}
      <Contato />

      {/* Rodapé */}
      <Footer />

          

      {/* Botão flutuante WhatsApp */}
      <WhatsAppButton />

    </>
  );
}

export default App;
