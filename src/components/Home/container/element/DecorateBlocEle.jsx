import React from 'react';

import '../css/decorateblock.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const DecorateBlocEle = (props) => {
    return (
        <div className={'dec_block'}>
            <div className={'img_part'}>
                {/*<img src={props.post.img}/>*/}
                <FontAwesomeIcon icon="fa-solid fa-gear" />
            </div>
            <div className={'title'}>
                <strong>{props.post.title}</strong>
            </div>
            <div className={'description'}>
                <p>
                    {props.post.description}
                </p>
            </div>
        </div>
    );
};

export default DecorateBlocEle;