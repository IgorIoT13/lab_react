import React, {createContext, useEffect, useState} from 'react';

import Upcont from "./component/upcontend/Upcont";
import Content from "./component/medlecont/Content";
import {getAlllight} from "../API/BackEnd";

const Catalog = ({dataSent}) => {

    const [ele, setEle] = useState([]);

    const [status, setStatus] = useState(false)

    useEffect(() => {
        const fetchElements = async () => {
            try {
                const data = await getAlllight();
                setEle(data);
                setStatus(true)
            } catch (error) {
                setStatus(false)
            }
        };

        fetchElements();
    }, []);






    const getParam = (data) =>{
        setEle(data)
        console.log(data)
    }

    const statuser = (status) => {
        setStatus(status)
    }



    return (
        <div>
            <Upcont zava = {getParam} statusInfo = {statuser} />
            <Content ele = {ele} status={status} sentdata ={dataSent}/>
        </div>
    );
};
export default Catalog;