import React, { useState, useEffect } from 'react';
import { SetAll } from './element_catalog';
import Buyelement from './element/buyelement';

import { ElementsStyle } from './css/elementsStyle';
import {getAlllight} from "../../../API/BackEnd";

const content = {
    title: 'Наші літаки :',
    uk: {
        title: 'Наші літаки :',
    },
    en: {
        title: 'Our flies :',
    },
};

function Content() {
    const [elementCatalog, setElementCatalog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log('afaf')
            try {
                const data = await getAlllight();
                console.log(data)
                setElementCatalog(data);
            } catch (error) {
                console.error('Помилка завантаження даних', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>{content.title}</h2>
            <ElementsStyle>
                {elementCatalog.map((element, index) => (
                    <Buyelement key={index} post={element} />
                ))}
            </ElementsStyle>
        </div>
    );
}


export default Content;