import React, { useEffect, useState } from 'react';
import Upitem from "./component/upcomponent/upitem";
import Buttonblock from "./component/buttonblock/buttonblock";
import { useParams } from "react-router-dom";
import {findElementById, findElementByTitle} from "../API/BackEnd";
import {useDispatch, useSelector} from "react-redux";

const Item = (props) => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    const [count, setCount] = useState(1)

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

    const dispatch = useDispatch()
    const itemCart = useSelector(state => state)

    if (!data) {
        return <div>Loading...</div>;
    }



    function add(count) {
        dispatch({type:"ADD_CART", payload: {
                id: data,
                count:parseInt(count)
            }})

    }


    return (
        <div>
            <Upitem post={data} />
            <hr/>
            <input
                type={'number'}
                value={count}
                onChange={(e) => {
                    const newValuer = e.target.value
                    setCount(newValuer)
                }}
            />
            <Buttonblock id={id} onClick={() => {
                add(count)
            }} />
        </div>
    );
};

export default Item;