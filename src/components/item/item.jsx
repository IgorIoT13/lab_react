import React, { useEffect, useState } from 'react';
import Upitem from "./component/upcomponent/upitem";
import Buttonblock from "./component/buttonblock/buttonblock";
import { useParams } from "react-router-dom";
import {findElementById, findElementByTitle} from "../API/BackEnd";

const Item = (props) => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            const data = await findElementById(id);
            setData(data);
        } catch (error) {
            console.error('Помилка завантаження даних', error);
            setData(null)
        }
    };


    // let elements = Elements()
    //
    // console.log(elements[0])
    //
    // let data = {};
    //
    //
    // elements.forEach((el) => {
    //     if (el.id == id){
    //
    //         console.log(el)
    //         data = el
    //     }
    // })




    if (!data) {
        return <div>Loading...</div>;
    }

    // Оновити елементи
    const handleUpdate = () => {
        setData([data]);
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