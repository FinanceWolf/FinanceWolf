import { promises as fs } from 'fs';
import InputContainer from '../InputContainer';
import '../../../styles/registerPage.scss';


async function Login() {
    const languageFile = await fs.readFile(process.cwd() + '/src/app/languages/english.json', 'utf8');
    const translation = JSON.parse(languageFile);

    return(
        <form method="POST">
            <div id="inputBox" className="flex flex-col">
                <div className="inputsRow">
                    <InputContainer>
                        <label htmlFor="name">{translation.RegisterSection.name}</label>
                        <input type="text" id="name" name="name" placeholder={translation.RegisterSection.nameplaceholder} />
                    </InputContainer>
                </div>

                <div className="inputsRow">
                    <InputContainer>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder={translation.RegisterSection.emailplaceholder} />
                    </InputContainer>
                </div>

                <div className="inputsRow">
                    <InputContainer>
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" id="cpf" name="cpf" placeholder={translation.RegisterSection.cpfplaceholder} />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="rg">RG</label>
                        <input type="text" id="rg" name="rg" placeholder={translation.RegisterSection.rgplaceholder} />
                    </InputContainer>
                </div>

                <div className="inputsRow">
                    <InputContainer>
                        <label htmlFor="pass">{translation.RegisterSection.password}</label>
                        <input type="password" id="pass" name="pass" placeholder={translation.LoginSection.passwordplaceholder} />
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="confpass">{translation.RegisterSection.confirmPassword}</label>
                        <input type="password" id="confpass" name="confpass" placeholder={translation.RegisterSection.passwordplaceholder} />
                    </InputContainer>
                </div>

                <div className="inputsRow">
                    <InputContainer>
                        <label htmlFor="birthdate">{translation.RegisterSection.birthdate}</label>
                        <input type="date" name="birthdate" id="birthdate" />
                    </InputContainer>
                </div>

                {/* <InputContainer type="select" selectDefault={translation.RegisterSection.selectDefault} options={[{
                        value: 'CPF',
                        option: 'CPF'
                    }]} id="identityDocument" name="identityDocument" required="true" label={translation.RegisterSection.identityDocument} className="registerSelect"
                /> */}
            </div>
            <input type="submit" className="inputSubmit" value={translation.RegisterSection.submit} />
        </form>
    );
};

export default Login;