import React from 'react';
import Buybutt from "../../../../item/component/buttonblock/element/buybutt";
import {BuyButt} from "../../../../item/component/buttonblock/Styled/StyleToButt";
import { useHistory } from 'react-router-dom';

const Morebtn = (props) => {



    return (
            <a id={props.id} href={`/item/${props.id}`} >
                Більше...
            </a>
        );
};

export default Morebtn;