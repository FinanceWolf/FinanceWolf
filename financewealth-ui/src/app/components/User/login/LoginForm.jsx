'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import ShowPass from '../ShowPass';
import axios from 'axios';
import InputContainer from '../InputContainer';
import '../../../styles/loginPage.scss';


const Login = () => {
    const [show, setShow] = useState(false);
    const handlePasswordChanging = () => {
        setShow(!show);
    }

/*     const languageFile = await fs.readFile(process.cwd() + '/src/app/languages/english.json', 'utf8');
    const translation = JSON.parse(languageFile); */

    /* Informações da API e dados atuais que o usuário inserirá */
    const [Api, setApi] = useState();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    /* Funções da API e do formulário */

    const fetchAPI = async () => {
        let api = await axios.get("http://localhost:8080/users/1");
        setApi(api);
    }

    const setValue = (e) => setLoginData({...loginData, [e.target.name]: e.target.value})

    const enviarForm = async (e) => {
        e.preventDefault(); // Temporário

        let api = await axios.post("http://localhost:8080/users/login", loginData);

        console.log(api);
    }

    return(
        <form method="POST" onSubmit={enviarForm}>
            <div id="inputBox" className="flex flex-col">
                <InputContainer className="login">
                    <FontAwesomeIcon icon={faUser} />
                    <input type="email" id="email" name="email" className="login-email" placeholder={'email'}
                    onChange={setValue} />
                </InputContainer>
                <InputContainer className="login" showPass={handlePasswordChanging}>
                    <FontAwesomeIcon icon={faLock} />
                    <input type={show ? 'text' : 'password'} id="password" name="password" className="login-pass"
                    placeholder="senha" onChange={setValue}/>
                </InputContainer>
            </div>
            <div className="checkboxContainer">
                <input type="checkbox" name="keepLogin" id="keepLogin" />
                <label for="keepLogin">{'Manter Login'}</label>
            </div>
            <input type="submit" value="Login" className="inputSubmit" />
        </form>
    );
};

export default Login;