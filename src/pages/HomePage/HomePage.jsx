import React from "react";
import "./HomePage.css";
import imgCurso1 from "./images/capaDoc.png"
import imgEDHUCCA from "./images/edhucca-parceiro.png"

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
                Nós somos o projeto extensionista IDCTec, vulgo Inclusão Digital e Capacitação Tecnológica.
                Oriundos da UTFPR, campus Apucarana, nosso objetivo sempre foi proporcionar uma educação de qualidade, capacitando nossos alunos no caminho da Informática.
              </p>
            </div>
          </div>
          <div class="content_box">
            <div class="materiais">
              {/* <div class="card_materiais">
                <div class="icon">
                    <img src="images/WIP.png" alt="Material Icon"/> 
                </div>
                <div class="title">Material 2</div>
            </div> */}
              <div class="card_materiais">
                <div class="icon">
                  <img src={imgCurso1} alt="Material Icon" />
                </div>
                <div className="course-links">
                  <a href="Material1.pdf" target="_blank" rel="noopener noreferrer" className="view-pdf">
                    Abrir PDF
                  </a>
                  <a href="Material1.pdf" download="Material1.pdf" className="download-pdf">
                    Baixar PDF
                  </a>
                </div>

              </div>
            </div>

            <div class="parceiros">
              <div class="card_parceiros">
                <div class="circle">
                  <img src={imgEDHUCCA} alt="Parceiro EDHUCCA" />
                </div>
                <h3>EDHUCCA</h3>
                <p>A Escola de Desenvolvimento Humano Casa do Caminho (EDHUCCA) é uma instituição sem fins lucrativos localizada em Apucarana, Paraná.</p>
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
          </div>

        </body>
      </main>
    </div>
  );
};

export default HomePage;