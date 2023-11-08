import React from 'react';
import {ButtBlock} from "./Styled/StyleToButt";
import Backbutt from "./element/backbutt";
import Buybutt from "./element/buybutt";
import Editbutt from "./element/Editbutt";

const Buttonblock = (props) => {
    return (
        <ButtBlock>
            <Backbutt id = {props.id}/>
            <Buybutt id = {props.id}/>
            <Editbutt id = {props.id} />
        </ButtBlock>
    );
};

export default Buttonblock;