import React from "react";
import "./HomePage.css";
import edhucca_logo from "./images/EDHUCCA.png";

const HomePage = () => {
  return (
    <div>

      <main>
      <body>
        <div class="name_apresentation">
          <div class="logo">
              <span class="idctec">IDC<b>TEC</b></span>
          </div>
          <div class="subtitle">
              <span>Integração Digital e <br></br> Capacitação Tecnológica</span>
          </div>
        </div>

        <div class="foto_explain">
          <div class="text-box">
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat maximus venenatis. 
                  Etiam dolor elit, iaculis non pretium ut, finibus non massa. Class aptent taciti sociosqu 
                  ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam fermentum sollicitudin 
                  dui et dapibus. Curabitur tincidunt purus aliquam nisl tristique suscipit. 
              </p>
          </div>
        </div>

        <div class="materiais">
          <div class="card_materiais">
            <div class="icon">
              {/* <img src="images/WIP.png" alt="Material Icon"/> */}
              <div className="placeholder-icon-home">{/* Improviso */}
                <span>📘</span>
              </div>
            </div>
            <div class="title">Material 1</div>
          </div>
          <div class="card_materiais">
            <div class="icon">
              {/* <img src="images/WIP.png" alt="Material Icon"/> */}
              <div className="placeholder-icon-home"> {/* Improviso */}
                <span>📘</span>
              </div>
            </div>
            <div class="title">Material 2</div>
          </div>
        </div>

        <div class="parceiros">
        <div class="card_parceiros">
            <div class="circle">
              <img src={edhucca_logo}></img>
            </div>
            <h3>EDHUCCA</h3>
            <p>A Escola de desenvolvimento Humano "Casa do Caminho" é um dos principais parceiros desse projeto, 
              fornecendo oportunidades para a capacitação daqueles que não teriam outra oportunidade.</p>
            <button>View details »</button>
        </div>
        {/* <div class="card_parceiros">
            <div class="circle"></div>
            <h3>Heading</h3>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <button>View details »</button>
        </div>
        <div class="card_parceiros">
            <div class="circle"></div>
            <h3>Heading</h3>
            <p>And lastly this, the third column of representative placeholder content.</p>
            <button>View details »</button>
        </div> */}

        </div>

      </body>
      </main>
    </div>
  );
};

export default HomePage;
