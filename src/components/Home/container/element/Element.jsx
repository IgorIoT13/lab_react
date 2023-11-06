import React from 'react';

import '../css/element.css'



const Element = (props) => {
    return (
        <div className={'element'}>
            <div className={'element__img'}>
                <img src={props.post.img}/>
            </div>

            <div className={'element__textblock'}>
                <h1>{props.post.title}</h1>
                <p>{props.post.text}</p>

                <a href={'#'}>Більше</a>
            </div>
            <script src="https://kit.fontawesome.com/bfeddb1814.js" crossOrigin="anonymous"></script>
        </div>

    );
};

export default Element;