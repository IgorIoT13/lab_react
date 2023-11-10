import React from 'react';
import {BackButt} from "../Styled/StyleToButt";
import {item} from "../../../../text_const";


const Backbutt = (props) => {
    return (
        <BackButt href={'/catalog'} id={`back_${props.id}`}>
            {item.ukr.backButt}
        </BackButt>
    );
};

export default Backbutt;