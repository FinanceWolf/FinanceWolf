"use client"

import { useState, useEffect } from 'react';

const ShowPass = (phrase) => {
    const [mostrar, setMostrar] = useState(false);
    /* const [phrase, setPhrase] = useState(); */
    
    const mostrarSenha = () => {
        if(!mostrar) {
            setMostrar(true);
        } else {
            setMostrar(false);
        };
    };

   /*  useEffect(() => {
        switch(language) {
            case "pt-br":
                setPhrase("Mostrar senha");
                break;
            case "en":
                setPhrase("Show password");
                break;
        }
    }, []); */

    return(
        <>
            <input type={mostrar ? "text" : "password"} id="password" name="password" className="input-pass" placeholder="Senha" />
            <button onClick={mostrarSenha} className="showPass">{phrase}</button>
        </>
    );
};

export default ShowPass;