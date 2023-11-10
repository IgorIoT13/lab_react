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
        }, [props.search, props.sort, props.filter]);

    const fetchData = async () => {
        try {
            const data = await findElementByTitle(props.search);
            let filteredData = data;
            if (props.filter) {
                filteredData = data.filter(element => element.fuel <= props.filter);
            }
            let sortedData = filteredData;
            if (props.sort === 'Title') {
                sortedData = filteredData.sort((a, b) => a.title.localeCompare(b.title));
            } else if (props.sort === 'Fuel') {
                sortedData = filteredData.sort((a, b) => a.fuel - b.fuel);
            }
            setElementCatalog(sortedData);
            props.sentdata(sortedData);
        } catch (error) {
            console.error('Помилка завантаження даних', error);
            setElementCatalog([])
        }
    };

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
