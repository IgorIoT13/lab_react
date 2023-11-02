import React from 'react';

import '../css/buyelement.css';

import Img from '../../../../Home/container/img/boing-1.jpg'

const Buyelement = (props) => {
    return (
        <div className={'element_b'}>
            <div className={'element__img_b'}>
                <img src={props.post.img}/>
            </div>

            <div className={'element__textblock_b'}>
                <h1>{props.post.title}</h1>
                <p>{props.post.text}</p>

                <a href={'#'}>$ {props.post.cost}</a>
            </div>
        </div>
    );
};

export default Buyelement;