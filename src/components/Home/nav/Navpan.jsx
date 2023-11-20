import React from 'react';
import './css/navpan.css'

import {nav} from "../../text_const";
const Navpan = () => {
    return (
        <nav>
            <div className={'navpan'}>
                <ul>
                    <li><a href={'/'}>{nav.ukr.home}</a></li>
                    <li><a href={'/catalog'}>{nav.ukr.catalog}</a></li>
                    <li><a href={'/cart'}>{nav.ukr.help}</a></li>
                    <li><a href={'#'}>{nav.ukr.contact}</a></li>
                </ul>
            </div>
            <hr/>
        </nav>

    );
};

export default Navpan;