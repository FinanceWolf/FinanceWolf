'use client';

import Header from '../../components/Header/Header';
import { useState, useEffect, useRef } from 'react';
import '../../styles/renda.scss';

const SimuladorDeRenda = () => {
    const [activeElement, setActive] = useState(0);
    const element = useRef(null);
    
    const menuSelection = (e) => {
        e.preventDefault();
        setActive(e.target.value);

        /* e.target.classList.add("BIMBAS"); */
    }

    useEffect(() => {
        console.log(element);

    }, [activeElement]);
    
    return(
        <>
            <Header />
            <main>
                <div className="simulationBox">
                    <nav>
                        <ul ref={element}>
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