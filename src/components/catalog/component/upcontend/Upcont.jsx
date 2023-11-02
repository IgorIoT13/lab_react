import React from 'react';
import Sortbutt from "./element/Sortbutt";
import Searchbutt from "./element/Searchbutt";

import {
    InputStyle
} from '../medlecont/css/elementsStyle'



const Upcont = (props) => {
    return (
        <div>
            <h2>Вітаю у каталозі</h2>
            <p>Вибирайте те що вам довподоби</p>

            <div>
               <InputStyle>
                   <input type={"search"} id={'search_input'} title={'Введіть назву літака'} />

                   <Searchbutt />
                   <Sortbutt/>

                   <hr/>
               </InputStyle>
            </div>
        </div>
    );
};

export default Upcont;

