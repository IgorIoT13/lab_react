import { getAlllight } from "./BackEnd";
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
            console.error("Error fetching elements", error);
        }
    };

    const getElements = () => {
        return elements;
    };

    const setEle = (element) => {
        setElements(element);
    };

    // You don't need to export getElements here

    return (
        <div>
            {/* Render your component content here */}
        </div>
    );
};

export default Elements;
