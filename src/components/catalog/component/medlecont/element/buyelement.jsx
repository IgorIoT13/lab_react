import React from 'react';

import '../css/buyelement.css';
import Img from '../../../../Home/container/img/boing-1.jpg'
import Morebtn from "./morebtn";


const Buyelement = (props) => {
    let description = props.post.description

    if (description.length > 93) {
        description = description.slice(0, 93) + '...';
    }

    return (
        <div id={props.post.id} className={'element_b'}>
            <div className={'element__img_b'}>
                <img src={Img}/>
            </div>

            <div className={'element__textblock_b'}>
                <h1>{props.post.title}</h1>
                <p>{description}</p>

                <p href={'#'}>$ {props.post.fuel}</p>
            </div>
            <Morebtn id = {props.post.id}/>

        </div>
    );
};

export default Buyelement;