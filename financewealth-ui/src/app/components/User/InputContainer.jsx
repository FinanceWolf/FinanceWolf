"use client";

import { useEffect, useState } from "react";
import "../../styles/registerPage.scss";

const InputContainer = (props) => {
  const [cep, setCep] = useState();

  const returnValue = (e) => {
    setCep(e.target.value);
  };

  return (
    <div className="inputContainer">
      {props.label ? <label htmlFor={props.name}>{props.label}</label> : null}
      {props.type == "select" ? (
        <select id={props.id} name={props.name} className={props.className}>
          <option selected="selected" disabled>
            {props.selectDefault}
          </option>
          {props.options.map((data) => {
            return (
              <option key={Math.random()} value={data.value}>
                {data.option}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          type={props.type}
          className={props.className}
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          required={props.required ? "true" : "false"}
          onChange={returnValue}
          change={cep}
          value={props.value ? props.value : null}
        />
      )}
    </div>
  );
};

export default InputContainer;
