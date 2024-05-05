import React from "react";
import "../../styles/welcomePage.scss";

export const WelcomePage = () => {
  return (
    <section className="welcomePage">
      <div className="welcomePage__textBox">
        <h1>Finance Wolf</h1>
        <p className="textBox__subtitle">A minha pomba te encanta</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          aspernatur rem saepe ipsam est sit voluptate, quo quibusdam ab sunt,
          temporibus, nihil eum cumque aperiam?
        </p>
        <a href="">Abrir agora</a>
      </div>
            <span className="welcomePage__image">
        <img
          src="images/wolf/wolfSilhueta.png"
          alt=""
        />
      </span>

    </section>
  );
};
