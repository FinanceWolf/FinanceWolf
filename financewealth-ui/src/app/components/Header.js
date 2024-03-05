import '../styles/padroes.css';

const Header = () => {
    return(
        <header className="flex absolute top-0 border-b border-slate-150 w-full h-16 items-center px-6 h-6 text-xl font-bold">
            <h1 className="text-2xl"><span>Finance</span> Wealth</h1>
        </header>
    );
};

export default Header;