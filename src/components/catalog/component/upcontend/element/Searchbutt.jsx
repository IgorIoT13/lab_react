import React, {useState} from 'react';

import {SearchStyle} from "../css/buttonStyle";

import {

}from'../../medlecont/element_catalog'


// const search_input = document.getElementById('search')


function SearchFunction(search = "") {
    let result_list = []

    console.log(result_list)
}


const Searchbutt = (input) => {
    return (
        <SearchStyle onClick={SearchFunction}>
           Знайти
        </SearchStyle>
    );
};

export default Searchbutt;