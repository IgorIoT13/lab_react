import React from 'react';
import './css/head.css'

import {header} from "../../text_const";

const Header = () => {
    return (
        <header>
            <div className={'up'}>
                <h1>{header.ukr.title}</h1>
                <h3>{header.ukr.underTitle}</h3>
            </div>

            <div className={'down'}>
                <a href={'#'} className={'button_header'}>{header.ukr.moreInfo}</a>
            </div>
        </header>
    );
};

export default Header;