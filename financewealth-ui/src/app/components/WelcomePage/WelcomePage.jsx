import React from "react";
import "../../styles/welcomePage.scss";

export const WelcomePage = () => {
  return (
    <section className="welcome__page">
      <div className="welcome__page__text__box">
        <h1>Minha pomba te encanta</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          aspernatur rem saepe ipsam est sit voluptate, quo quibusdam ab sunt,
          temporibus, nihil eum cumque aperiam?
        </p>
        <a href="">Abrir agora</a>
      </div>
      {/* <span className="welcome__page__image">
        <img
          src="images/wolf/_25df0ee9-c3a3-41bd-a307-d0525193e573.jpg"
          alt=""
        />{" "}
      </span> */}
    </section>
  );
};
