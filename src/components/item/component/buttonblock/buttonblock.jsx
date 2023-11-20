import React from 'react';
import {ButtBlock} from "./Styled/StyleToButt";
import Backbutt from "./element/backbutt";
import Buybutt from "./element/buybutt";

const Buttonblock = (props) => {
    return (
        <ButtBlock>
            <Backbutt id = {props.id}/>
            <Buybutt onClick={props.onClick} id = {props.id}/>
        </ButtBlock>
    );
};

export default Buttonblock;