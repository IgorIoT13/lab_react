import React, {useState} from 'react';

import {SearchStyle} from "../css/buttonStyle";

import {
    element_catalog
}from'../../medlecont/element_catalog'


// const search_input = document.getElementById('search')


function SearchFunction(search = "") {
    let result_list = []

    element_catalog.forEach((ele) =>{
        let {title} = ele;
        if (title.toLowerCase().indexOf(search) !== -1) {
            result_list.push(ele);
        }
    })

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