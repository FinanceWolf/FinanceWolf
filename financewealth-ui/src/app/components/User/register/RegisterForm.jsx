/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'; */
import { promises as fs } from 'fs';
import ShowPass from '../login/ShowPass';
import InputContainer from '../InputContainer';
import '../../../styles/registerPage.scss';


async function Login() {
    const languageFile = await fs.readFile(process.cwd() + '/src/app/languages/portuguesbr.json', 'utf8');
    const translation = JSON.parse(languageFile);

    const countriesFile = await fs.readFile(process.cwd() + '/src/app/languages/countries.json', 'utf8');
    const countries = JSON.parse(countriesFile);

    /* Object.assign(countries, { option: countries.name}); */

    return(
        <form method="POST">
            <div id="inputBox" className="flex flex-col">
                <InputContainer type="email" id="email" name="email" className="register-email" placeholder={translation.LoginSection.emailplaceholder} label="Email" />

                <div className="inputContainer passwordContainer">
                    <InputContainer type="password" id="password" name="password" className="register-password" placeholder={translation.LoginSection.passwordplaceholder} label={translation.RegisterSection.password} />

                    <InputContainer type="password" id="confPass" name="confPass" className="register-password" placeholder={translation.RegisterSection.passwordplaceholder} label={translation.RegisterSection.confirmPassword} />
                </div>

                <InputContainer type="select" selectDefault={translation.RegisterSection.selectDefault} options={[{
                        value: 'CPF',
                        option: 'CPF'
                    }]} id="identityDocument" name="identityDocument" required="true" label={translation.RegisterSection.identityDocument} />

                    <InputContainer type="select" id="country" name="country" options={countries} />
            </div>
            <input type="submit" value={translation.RegisterSection.submit} className="inputSubmit" />
        </form>
    );
};

{/* <div className="checkboxContainer">
<input type="checkbox" name="keepLogin" id="keepLogin" />
<label for="keepLogin">{translation.LoginSection.keepLogin}</label>
</div> */}

export default Login;