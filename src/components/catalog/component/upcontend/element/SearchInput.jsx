import React from "react";

import {
    InputStyle
} from '../medlecont/css/elementsStyle'
import Searchbutt from "./Searchbutt";
import Sortbutt from "./Sortbutt";

function InputComponent({ inputValue, setInputValue }) {
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <InputStyle>
                <input
                    type="search"
                    id={'search_input'}
                    title={'Введіть назву літака'}
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <Searchbutt/>
                <Sortbutt/>
                <hr/>
            </InputStyle>
        </div>
    );
}

export default InputComponent;