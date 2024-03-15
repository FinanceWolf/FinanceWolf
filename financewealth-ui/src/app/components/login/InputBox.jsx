"use client";

import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import ShowPass from './ShowPass';

const InputBox = (showPassTran, passwordTran, emailTran, keepLoginTran) => {
    return(
    <>
        <div id="inputBox" className="flex flex-col">
                <div className="inputContainer">
                    <FontAwesomeIcon icon={faUser} />
                    <input type="email" id="email" name="email" className="input-email" placeholder={emailTran} />
                </div>
                {/* {<div className="inputContainer">
                    <FontAwesomeIcon icon={faLock} />
                    <ShowPass quote={showPassTranslation} placeholder={passwordTranslation} />
                </div>} */}
            </div>
            <div className="checkboxContainer">
                <input type="checkbox" name="keepLogin" id="keepLogin" onClick={() => {console.log(keepLoginTran)}} />
                <label for="keepLogin">{keepLoginTran}</label>
        </div>
    </>
    );
};

export default InputBox;