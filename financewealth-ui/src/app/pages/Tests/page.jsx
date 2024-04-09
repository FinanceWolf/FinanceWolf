'use client';

import Footer from "../../components/Footer/Footer";
import {useDispatch, useSelector} from 'react-redux';
import { increment, decrement } from "../../ReduxStore/testing/slicerTesting";

const Tests = () => {
    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    console.log(counter);

    return (
        <>
            <Footer />
            <button style={{'border':'1px solid blue', 'width':'120px'}} onClick={() => {dispatch(increment())}}>Testar redux</button>
        </>

    )
        }
    
    export default Tests;

// import React from 'react';
// import { faDollarSign, faChartSimple, faChartLine, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import "../../styles/porfolio.scss";
// import "../../styles/globals.css";

// const Tests = () => {
//     return (
//             <section className='section__services'>
//                 <h1 className='title__services'>Lorem ipsum dolor sit amet.</h1>
//                 <div className="container__services">
//                     <div className="block__services">
//                         <FontAwesomeIcon icon={faDollarSign} />
//                         <h3>Lorem ipsum dolor.</h3>
//                         <div className="description_box">
//                             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure tenetur beatae doloremque ad veritatis architecto porro suscipit ipsa qui sed?</p>
//                         </div>
//                     </div>

//                     <div className="block__services">
//                         <FontAwesomeIcon icon={faChartSimple} />
//                         <h3>Lorem ipsum dolor.</h3>
//                         <div className="description_box">
//                             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure tenetur beatae doloremque ad veritatis architecto porro suscipit ipsa qui sed?</p>
//                         </div>
//                     </div>

//                     <div className="block__services">
//                         <FontAwesomeIcon icon={faMagnifyingGlassDollar} />
//                         <h3>Lorem ipsum dolor.</h3>
//                         <div className="description_box">
//                             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure tenetur beatae doloremque ad veritatis architecto porro suscipit ipsa qui sed?</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//       )
//     }

// export default Tests;