import React, { useState } from 'react';
import '../css/element.css';

const Element = (props) => {
    const [max, setMax] = useState(30);

    let description = props.post.description;

    if (description.length > max) {
        description = description.slice(0, max) + '...';
    }


    const handleButtonClick = () => {
        setMax(9999);
    };

    return (
        <div className={'element'}>
            <div className={'element__img'}>
                <img src={props.post.img} alt={props.post.title} />
            </div>

            <div className={'element__textblock'}>
                <h1>{props.post.title}</h1>
                <p>{description}</p>


                {max < description.length && (
                    <button onClick={handleButtonClick}>Завантажити більше</button>
                )}
            </div>
            <script src="https://kit.fontawesome.com/bfeddb1814.js" crossOrigin="anonymous"></script>
        </div>
    );
};

export default Element;
