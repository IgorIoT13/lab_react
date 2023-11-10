import React, { useState } from 'react';
import Sortbutt from "./element/Sortbutt";
import Searchbutt from "./element/Searchbutt";

import {
    InputStyle
} from '../medlecont/css/elementsStyle';

const Upcont = ({ sentSearch, sentType, sentFilter }) => {
    const [searchText, setSearchText] = useState('');

    const [filter, setFilter] = useState(99999)

    const returnType = (data) =>{
        sentType(data)
    }



    return (
        <div>
            <h2>Вітаю у каталозі</h2>
            <p>Вибирайте те, що вам довподобає</p>

            <div>
                <InputStyle>
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            setSearchText(newValue);
                            sentSearch(newValue);
                        }}
                    />



                    <Searchbutt input={searchText} />
                    <Sortbutt returnType = {returnType}/>


                    <input type="text"
                           value={filter}
                           onChange={(e) => {
                               const newValuer = e.target.value;
                               setFilter(newValuer)
                               sentFilter(newValuer)
                           }}/>
                    <hr />

                </InputStyle>
            </div>
        </div>
    );
};

export default Upcont;
