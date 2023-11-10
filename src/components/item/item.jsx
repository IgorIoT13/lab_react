import React, { useEffect, useState } from 'react';
import Upitem from "./component/upcomponent/upitem";
import Buttonblock from "./component/buttonblock/buttonblock";
import { useParams } from "react-router-dom";
import { findElementById } from "../API/BackEnd";

const Item = (props) => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        findElementById(id)
            .then(data => {
                console.log(data)
                setData(data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, [id]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Upitem post={data} />
            <hr/>
            <Buttonblock id={id} />
        </div>
    );
};

export default Item;
