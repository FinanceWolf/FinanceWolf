'use client';

import React from 'react'
import InputContainer from '../InputContainer';
import { useState, useEffect } from 'react';

export const AddressForm = () => {
  const [api, setApi] = useState();
  const [cep, setCep] = useState('');

  useEffect(() => {
      if(cep.length == 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {return response.json()})
        .then(data => setApi(data));
      }
  }, [cep]);

  useEffect(() => {
      console.log(api); 
  }, [api]);

  return (
    <form method='POST'>
        <div id="inputWrapper" className='inputWrapper'>
            <label htmlFor="CEP">CEP</label>
                <input type="number" name="CEP" id="CEP" placeholder='CEP' onChange={(e) => setCep(e.target.value)} />

            {/* <InputContainer type="number" id="CEP" name="CEP" placeholder="CEP" label="CEP" change={() => setCep(returnValue)} /> */}

            <InputContainer type="text" id="logradouro" name="logradouro" placeholder="Logradouro" label="Logradouro" value={api ? api.logradouro : null} />

            <InputContainer type="number" id="numero" name="numero" placeholder="Numero" label="Numero"/>

            <InputContainer type="text" id="complemento" name="complemento" placeholder="Complemento" label="Complemento"/>

            <InputContainer type="text" id="bairro" name="bairro" placeholder="Bairro" label="Bairro" value={api ? api.bairro : null}/>

            <InputContainer type="text" id="cidade" name="cidade" placeholder="Cidade" label="Cidade" value={api ? api.localidade : null}/>

            {/* <InputContainer type="text" id="estado" name="estado" placeholder="Estado" label="Estado" value={api ? api.estado : null}/> */}

            <InputContainer type="text" id="uf" name="uf" placeholder="UF" label="UF" value={api ? api.uf : null}/>

        </div>

    </form>
  )
}
