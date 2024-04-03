'use client';

import Header from '../../components/Header/Header';
import '../../styles/renda.scss';

const SimuladorDeRenda = () => {
    const menuSelection = (e) => {
        e.preventDefault();
        
        console.log(e.target.value);
    }
    
    return(
        <>
            <Header />
            <main>
                <div className="simulationBox">
                    <nav>
                        <ul>
                            <li onClick={menuSelection} value='1'>Tesouro prefixado</li>
                            <li onClick={menuSelection} value='2'>Selic</li>
                            <li onClick={menuSelection} value='3'>IPCA+</li>
                            <li onClick={menuSelection} value='4'>CDB &amp; LC</li>
                            <li onClick={menuSelection} value='5'>LCI &amp; LCA</li>
                        </ul>
                    </nav>

                    <span className="totalProfit">
                        <span className="moneyType">R&#36;</span>1337,00
                    </span>
                </div>
            </main>
        </>
    );
};

export default SimuladorDeRenda;