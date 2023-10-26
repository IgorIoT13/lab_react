import React from 'react';
import './css/navpan.css'

const Navpan = () => {
    return (
        <nav>
            <div className={'navpan'}>
                <ul>
                    <li><a href={'#'}>Home</a></li>
                    <li><a href={'#'}>Catalog</a></li>
                    <li><a href={'#'}>Help</a></li>
                    <li><a href={'#'}>Sing up</a></li>
                </ul>
            </div>
        </nav>    );
};

export default Navpan;