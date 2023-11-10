import React, { useState, useEffect } from 'react';
import Buyelement from './element/buyelement';

import { ElementsStyle } from './css/elementsStyle';
import {findElementByTitle, getAlllight} from "../../../API/BackEnd";

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
        fetchData();
        console.log()
    }, [props.search]);

    const fetchData = async () => {
        try {
            const data = await findElementByTitle(props.search);
            setElementCatalog(data);
            console.log(props.search)
        } catch (error) {
            console.error('Помилка завантаження даних', error);
        }
    };


    const loadMore = () => {
        // Збільшуємо кількість видимих елементів на 6
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
