import React, { useEffect, useState } from 'react';
import Upitem from "./component/upcomponent/upitem";
import Buttonblock from "./component/buttonblock/buttonblock";
import { useParams } from "react-router-dom";
import { findElementById } from "../API/BackEnd";
import Elements from "../API/elements";
import elements from "../API/elements";

const Item = (props) => {
    const { id } = useParams();
    const [dataAll, setDataAll] = useState([]);

    let elements = Elements()

    console.log(elements[0])

    let data = {};


    elements.forEach((el) => {
        if (el.id == id){

            console.log(el)
            data = el
        }
    })




    if (!data) {
        return <div>Loading...</div>;
    }

    // Оновити елементи
    const handleUpdate = () => {
        setDataAll([data]);
    };

    return (
        <div>
            <Upitem post={data} />
            <hr/>
            <Buttonblock id={id} onClick={handleUpdate} />
        </div>
    );
};

export default Item;