import "./style.css";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import close from "../../assets/close-icon.svg";
import data from "../../data";
import { useState, useEffect } from "react";

function Main() {
  const [showModal, setShowModal] = useState(false);
  const [infoModal, setInfoModal] = useState({});

  function handleModal(event) {
    const item = data.find((sapato) => sapato.id === parseInt(event.target.id));

    setShowModal(true);
    setInfoModal(item);

    console.log(infoModal);
  }

  return (
    <div className="container">
      <header>
        <div className="header-moda">
          <h1>MODA MASCULINA</h1>
          <h2>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</h2>
        </div>
        <div className="header-logo">
          <img src={logo} alt="logo Cubos Academy"></img>
        </div>
      </header>
      <main>
        {data.map((item) => (
          <div key={item.id} className="main-div-individual">
            <img
              onClick={(event) => handleModal(event)}
              src={item.image}
              id={item.id}
            ></img>
            <span className="main-descricao">{item.name}</span>
            <div className="main-div-preco">
              <span className="main-oldPrice">{`R$ ${item.oldPrice}`}</span>
              <span className="main-currentPrice">{`R$ ${item.currentPrice.toFixed(
                2
              )}`}</span>
            </div>
            <div className="main-div-preco">
              <span className="main-div-preco-bottom-left">{`6x R$ ${(
                item.currentPrice / 6
              ).toFixed(2)}`}</span>
              <span className="main-div-preco-bottom-right">Sem Juros</span>
            </div>
          </div>
        ))}

        {showModal && (
          <div className="modal">
            <div className="modal-container">
              <img
                className="modal-close"
                onClick={() => setShowModal(false)}
                src={close}
              ></img>
              <img
                className="modal-imagem"
                src={infoModal.image}
                alt="imagem-sapato"
              ></img>
              <span className="modal-nome">{infoModal.name}</span>
              <span className="modal-descricao">{infoModal.description}</span>
              <div className="modal-bottom">
                <button>Comprar</button>

                <div className="modal-bottom-precos">
                  <div className="main-div-preco">
                    <span className="modal-oldPrice">{`R$ ${infoModal.oldPrice}`}</span>
                    <span className="modal-currentPrice">{`R$ ${infoModal.currentPrice.toFixed(
                      2
                    )}`}</span>
                  </div>
                  <div className="modal-bottom-bottom-precos">
                    <span className="modal-preco-bottom-left">{`6x R$ ${(
                      infoModal.currentPrice / 6
                    ).toFixed(2)}`}</span>
                    <span className="modal-preco-bottom-right">Sem Juros</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer>
        <div className="footer-endereco">
          <strong>Endereco:</strong>
          <span>Rua Cubos, 10</span>
          <span>Jardim Academy</span>
          <span>Salvador - Bahia - CEP 41820-021</span>
          <div className="footer-icones">
            <img src={facebook} alt="logo Facebook"></img>
            <img src={instagram} alt="logo Instagram"></img>
          </div>
        </div>

        <div className="footer-div-logo">
          <img
            className="footer-logo"
            src={logo}
            alt="logo Cubos Academy"
          ></img>
        </div>
      </footer>
    </div>
  );
}

export default Main;
