import React from 'react';

import '../css/decorateblock.css';

const DecorateBlocEle = (props) => {
    return (
        <div className={'dec_block'}>
            <div className={'img_part'}>
                <img src={props.post.img}/>
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