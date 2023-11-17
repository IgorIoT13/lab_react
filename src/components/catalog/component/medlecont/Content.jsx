import React, { useState, useEffect } from 'react';
import Buyelement from './element/buyelement';

import { ElementsStyle } from './css/elementsStyle';
import {filter, findElementByTitle, getAlllight} from "../../../API/BackEnd";

const content = {
    title: 'Наші літаки :',
    uk: {
        title: 'Наші літаки :',
    },
    en: {
        title: 'Our flies :',
    },
};

const Content = (props) => {
    const [elementCatalog, setElementCatalog] = useState([]);
    const [visibleElements, setVisibleElements] = useState(6); // Початкова кількість видимих елементів

    useEffect(() => {
        setElementCatalog(props.ele)
    }, [props.ele]);






    const loadMore = () => {
        setVisibleElements(visibleElements + 6);
    };


    return (
        <div>
            <h2>{content.title}</h2>
            <ElementsStyle>
                {elementCatalog.slice(0, visibleElements).map((element, index) => (
                    <Buyelement key={index} post={element} />
                ))}
            </ElementsStyle>
            {visibleElements < elementCatalog.length && (
                <button onClick={loadMore}>Завантажити більше</button>
            )}
        </div>
    );
}

export default Content;
