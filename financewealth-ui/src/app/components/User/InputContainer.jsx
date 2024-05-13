'use client';

import { useState, useEffect } from 'react';
import '../../styles/InputContainer.scss';

const InputContainer = (props) => {
  return(
    <div className={`inputContainer ${props.className ? props.className : 'default'}`}>
      {props.children}
      {props.showPass ? <span className="showPass" onClick={() => props.showPass(true)}>Mostrar senha</span> : null}
    </div>
  );
}

export default InputContainer;