"use client";

import '../styles/padroes.css';
import styled, { css } from 'styled-components';

const Container = ({list, height, width, title, fontsize}) => {
    const Div = styled.div`
        display: flex;
        padding: 2px 6px;
        margin: 6px;
        height: ${height};
        width: ${width};
        box-shadow: 0 0 8px 6px rgba(0, 0, 0, 0.2);
    `;

    const Ul = styled.ul`
        font-size: ${fontsize};
    `

    return(
        <Div>
            {title ? <h1>{title}</h1> : null}
            <Ul>
                {list ? list.map((item) => {return <li>{item}</li>}) : null}
            </Ul>
        </Div>
    );
};

export default Container;