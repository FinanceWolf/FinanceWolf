import '../styles/defaults.scss';

const Footer = ({trademark}) => {
    return(
        <footer className="mainFooter">
            <div className="topSection">
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat similique culpa, praesentium rerum voluptates ut ratione. Mollitia iusto tempora ullam fuga aliquid quia reprehenderit expedita. Minus incidunt at ducimus eius.</span>
            </div>

            <div className="bottomSection">
                <span className="trademark">{trademark}</span>
            </div>
        </footer>
    );
};

export default Footer;