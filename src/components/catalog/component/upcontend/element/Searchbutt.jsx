import React from 'react';

import {SearchStyle} from "../css/buttonStyle";

// const search_input = document.getElementById('search')

const Searchbutt = (props) => {

    return (
        <SearchStyle onClick={() => props.onClickCustom(props.input)}>
            Знайти
        </SearchStyle>
    );
};
export default Searchbutt;