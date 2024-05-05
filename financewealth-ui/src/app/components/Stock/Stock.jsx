import React from "react";
import "../../styles/Stock.scss";

const Stock = () => {
  return (
    <>
      <section className="stockSection">
        <div className="stockWrapper">
          <section className="cardSection">
            <span><button href="" className="cardSection__button">Populares</button></span>
            <span><button href="" className="cardSection__button">Maiores altas</button></span>
            <span><button href="" className="cardSection__button">Maiores baixas</button></span>

            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>

            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </section>
          <div className="stockSection__title">
            <h1>Descubra o melhor jeito de investir</h1>
            <p>Conte com a FinanceWolf para todas as bimbadas do mercado</p>
            <a href="">Ver todas as ações</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stock;
