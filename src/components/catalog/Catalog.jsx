import React, {createContext, useEffect, useState} from 'react';

import Upcont from "./component/upcontend/Upcont";
import Content from "./component/medlecont/Content";
import Elements from "../API/elements";
import {getAlllight} from "../API/BackEnd";

const MyContext = createContext('');

const Catalog = ({dataSent}) => {

    const [ele, setEle] = useState([]);

    useEffect(() => {
        const fetchElements = async () => {
            try {
                const data = await getAlllight();
                setEle(data);
            } catch (error) {
                console.error("Error fetching elements", error);
            }
        };

        fetchElements();
    }, []);






    const getParam = (data) =>{
        setEle(data)
        console.log(data)
    }



    return (
        <div>
            <Upcont zava = {getParam} />
            <Content ele = {ele} sentdata ={dataSent}/>
        </div>
    );
};
export default Catalog;