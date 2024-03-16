import RegisterForm from '../../components/User/register/RegisterForm';
import { promises as fs } from 'fs';

async function Register() {
    const languageFile = await fs.readFile(process.cwd() + '/src/app/languages/portuguesbr.json', 'utf8');
    const data = JSON.parse(languageFile);

    return(
        <main id="registerPage">
            <section id="lateralSection">
                <img src="/images/LoginPageIcon.png" />
            </section>
            <section id="loginSection">
                <div className="internalLoginSection">
                    <h2>{data.RegisterSection.title}</h2>
                    <RegisterForm />
                </div>
                <footer>
                    <span className="trademark">&copy; 2023 Projeto desenvolvido pela DevSquad</span>
                </footer>
            </section>
        </main>
    );
};

export default Register;