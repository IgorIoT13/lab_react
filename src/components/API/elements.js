import {filter, getAlllight} from "./BackEnd";
import React, { useState, useEffect } from "react";

const Elements = () => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        fetchElements();
    }, []);

    const fetchElements = async () => {
        try {
            const data = await getAlllight();
            setElements(data);
        } catch (error) {
            console.log('ajkshfkjagfkjahg');
        }
    };

    const getElements = () => {
        return elements;
    };

    const setEle = (element) => {
        setElements(element);
    };

    return elements
};

export default Elements;

