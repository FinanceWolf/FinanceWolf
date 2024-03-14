import LoginForm from '../../components/login/LoginForm';
import { promises as fs } from 'fs';

async function Login() {
    const languageFile = await fs.readFile(process.cwd() + '/src/app/languages/portuguesbr.json', 'utf8');
    const data = JSON.parse(languageFile);

    return(
        <main>
            <section id="lateralSection">
                <img src="/images/felippe.png" />
            </section>
            <section id="loginSection">
                <div className="internalLoginSection">
                    <h2>{data.LoginSection.title}</h2>
                    <LoginForm />
                </div>
                <footer>
                    <span className="trademark">&copy; 2023 Projeto desenvolvido pela DevSquad</span>
                </footer>
            </section>
        </main>
    );
};

export default Login