"use client";

import { useEffect, useState } from "react";
import "../../styles/registerPage.scss";
import "../../styles/InputContainer.scss";

const InputContainer = (props) => {
  const [cep, setCep] = useState();

  const returnValue = (e) => {
    setCep(e.target.value);
  };

  console.log(props.type);

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
          className={props.type == 'submit' ? 'inputSubmit' : `userInput ${props.className} `}
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          required={props.required ? "true" : "false"}
          onChange={returnValue}
          value={props.value ? props.value : null}
        />
      )}
    </div>
  );
};

export default InputContainer;