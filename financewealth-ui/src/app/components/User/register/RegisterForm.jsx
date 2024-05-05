/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'; */
import { promises as fs } from 'fs';
import ShowPass from '../ShowPass';
import InputContainer from '../InputContainer';
import '../../../styles/registerPage.scss';


async function Login() {
    const languageFile = await fs.readFile(process.cwd() + '/src/app/languages/english.json', 'utf8');
    const translation = JSON.parse(languageFile);

    const countriesFile = await fs.readFile(process.cwd() + '/src/app/languages/countries.json', 'utf8');
    const countries = JSON.parse(countriesFile);

    /* Object.assign(countries, { option: countries.name}); */

    return(
        <form method="POST">
            <div id="inputBox" className="flex flex-col">
                <div className="inputsRow">
                    <InputContainer type="text" id="nome" name="nome" placeholder={translation.RegisterSection.nameplaceholder} label={translation.RegisterSection.name} />
                </div>

                <div className="inputsRow">
                    <InputContainer type="email" id="email" name="email" placeholder={translation.LoginSection.emailplaceholder} label="Email" />
                </div>

                <div className="inputsRow">
                    <InputContainer type="text" id="CPF" name="CPF" placeholder="CPF" label="CPF" />
                    <InputContainer type="text" id="RG" name="RG" placeholder="RG" label="RG" />
                </div>

                <div className="inputsRow">
                    <InputContainer type="password" id="password" name="password" placeholder={translation.LoginSection.passwordplaceholder} label={translation.RegisterSection.password} />

                    <InputContainer type="password" id="confPass" name="confPass" placeholder={translation.RegisterSection.passwordplaceholder} label={translation.RegisterSection.confirmPassword} />
                </div>

                <div className="inputsRow">
                    <InputContainer type="date" className="date" label={translation.RegisterSection.birthdate} />
                </div>

                {/* <InputContainer type="select" selectDefault={translation.RegisterSection.selectDefault} options={[{
                        value: 'CPF',
                        option: 'CPF'
                    }]} id="identityDocument" name="identityDocument" required="true" label={translation.RegisterSection.identityDocument} className="registerSelect"
                /> */}
            </div>
            <input type="submit" value={translation.RegisterSection.submit} />
        </form>
    );
};

export default Login;