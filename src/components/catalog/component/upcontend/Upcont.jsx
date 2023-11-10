import React, { useState } from 'react';
import Sortbutt from "./element/Sortbutt";
import Searchbutt from "./element/Searchbutt";
import Content from "../medlecont/Content";

import {
    InputStyle
} from '../medlecont/css/elementsStyle';

const Upcont = ({ sentSearch }) => {
    const [searchText, setSearchText] = useState('');

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
                    <Sortbutt />
                    <hr />
                </InputStyle>
            </div>
        </div>
    );
};

export default Upcont;
