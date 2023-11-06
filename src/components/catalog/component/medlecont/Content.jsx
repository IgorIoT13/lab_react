import React from 'react';
import {
    element_catalog,
} from './element_catalog';
import Buyelement from "./element/buyelement";

import {
    ElementsStyle
} from "./css/elementsStyle";



const content = {
    "title": "Наші літаки :",
    "uk": {
        "title": "Наші літаки :"
    },
    "en": {
        "title": "Our flies :"
    }
};

const Content = () => {
    return (
        <div>
            <h2>{content.title}</h2>
            <ElementsStyle>
                {element_catalog.map((element, index) => (
                    <Buyelement key={index} post={element} />
                ))}
            </ElementsStyle>
        </div>
    );
};

export default Content;
