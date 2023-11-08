import React from 'react';
import Upitem from "./component/upcomponent/upitem";
import Buttonblock from "./component/buttonblock/buttonblock";

const Item = (props) => {
    return (
        <div>
            <Upitem post = {props.uper}/>
            <Buttonblock id = {1}/>
        </div>
    );
};

export default Item;