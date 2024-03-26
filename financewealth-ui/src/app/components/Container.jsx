"use client";

import '../styles/defaults.scss';
import styled from 'styled-components';

const Container = ({list, title, titlesize, fontsize, padding}) => {
    return(
        <div className="container" style={{padding: padding}}>
            {title ? <h2>{title}</h2> : null}
            <ul>
                {list ? list.map((item) => {return <li key={Math.random()}>{item}</li>}) : null}
            </ul>
        </div>
    );
};

export default Container;