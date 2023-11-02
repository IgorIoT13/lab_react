import React from 'react';
import './css/navpan.css'

const Navpan = () => {
    return (
        <nav>
            <div className={'navpan'}>
                <ul>
                    <li><a href={'/'}>Home</a></li>
                    <li><a href={'/catalog'}>Catalog</a></li>
                    <li><a href={'#'}>Help</a></li>
                    <li><a href={'#'}>Contact</a></li>
                </ul>
            </div>
            <hr/>
        </nav>

    );
};

export default Navpan;