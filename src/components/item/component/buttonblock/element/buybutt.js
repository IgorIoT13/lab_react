import React from 'react';
import {BuyButt} from "../Styled/StyleToButt";
import {item} from "../../../../text_const";

const Buybutt = (props) => {
    return (
        <BuyButt id={`buy_${props.id}`}>
            {item.ukr.buyButt}
        </BuyButt>
    );
};

export default Buybutt;