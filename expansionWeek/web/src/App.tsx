import React from "react";
import "./App.css";

import IconDescription from "./components/IconDescription/Index";
import TextGrey from "./components/TextGrey/Index";

import HeroImg from "./assets/images/Hero.svg";
import GroupsIcon from "./assets/images/icon-groups.svg";
import LampIcon from "./assets/images/icon-lamp.svg";
import PsychologyIcon from "./assets/images/icon-psychology.svg";

function App() {
  return (
    <div id="App">
      <div className="content">
        <main>
          <img
            src={HeroImg}
            alt="Um homem sentado na pedra pensando nas soluções."
          />

          <div>
            <h1>
              Pensamento crítico e sua importância na área de desenvolvimento.
            </h1>

            <TextGrey>
              Quando aparece um problema inesperado, corremos para resolver o
              problema sem pensar direito! Muitos problemas, normalmente não é
              somente técnico e isso pode acabar exigindo muita informação. Com
              o tempo curto, acabamos que nem sempre a decisão escolhida é a
              correta.
            </TextGrey>

            <TextGrey>
              Uma decisão ruim pode implicar no seu negócio, como pessoais e
              profissionais, por isso o pensamento crítico é muito importante
              para nós desenvolvedores, precisamos pensar em soluções
              alternativas e suas possíveis consequências.
            </TextGrey>
          </div>
        </main>

        <section className="icons-section">
          <h2>3 Pilares do pensamento crítico</h2>

          <div className="icons">
            <IconDescription
              icon={{ source: LampIcon, alt: "Lâmpada" }}
              headerDescription="Resolução de problemas"
            >
              <TextGrey>
                Precisamos definir o problema, determinar sua causa, gerar
                possíveis soluções, pois nem sempre a primeira solução é a
                melhor, e implementar a solução.
              </TextGrey>

              <TextGrey>
                Podemos até criar uma solução incrível, mas que é completamente
                inviável no ponto de vista técnico e financeiro! Então decidir
                qual adotar, não é uma decisão somente técnica!
              </TextGrey>
            </IconDescription>

            <IconDescription
              icon={{ source: GroupsIcon, alt: "Grupo de pessoas" }}
              headerDescription="Tomada de decisão"
            >
              <TextGrey>
                Normalmente não temos muito tempo e a indecisão não está ao
                nosso favor quanto não temos tempo a perder.
              </TextGrey>

              <TextGrey>
                E nessa hora pensamento crítico entra em ação. Conseguimos
                enxergar ao mesmo tempo mais de uma alternativa e sua
                consequências. Fazendo que suas decisões sejam assertivas e
                rápidas.
              </TextGrey>
            </IconDescription>

            <IconDescription
              icon={{ source: PsychologyIcon, alt: "Raciocínio lógico" }}
              headerDescription="Raciocínio lógico"
            >
              <TextGrey>
                Já o raciocínio lógico, é organizar a informações disponíveis e
                nosso pensamento de forma lógica, fornecendo uma dedução para
                determinada situação.
              </TextGrey>

              <TextGrey>
                Isso é praticamente o que utilizamos no nosso dia a dia para
                construir qualquer algoritmo.
              </TextGrey>
            </IconDescription>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
