import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { promises as fs } from 'fs';
import ShowPass from './showPass';
import '../../styles/loginPage.scss';


async function Login() {
    const languageFile = await fs.readFile(process.cwd() + '/src/app/languages/portuguesbr.json', 'utf8');
    const translation = JSON.parse(languageFile);

    /* let showPass = translation.LoginSection.showPass; */

    return(
        <form method="POST">
            <div id="inputBox" className="flex flex-col">
                <div className="inputContainer">
                    <FontAwesomeIcon icon={faUser} />
                    <input type="email" id="email" name="email" className="input-email" placeholder="E-mail" />
                </div>
                <div className="inputContainer">
                    <FontAwesomeIcon icon={faLock} />
                    <ShowPass phrase={JSON.stringify(translation.LoginSection.ShowPass)} />
                </div>
            </div>
            <div className="checkboxContainer">
                <input type="checkbox" name="keepLogin" id="keepLogin" />
                <label for="keepLogin">{translation.LoginSection.keepLogin}</label>
            </div>
            <input type="submit" value="Login" className="inputSubmit" />
            <a>Fazer cadastro</a>
        </form>
    );
};

export default Login;