import React, { useState } from 'react';
import Sortbutt from "./element/Sortbutt";
import Searchbutt from "./element/Searchbutt";

import {
    InputStyle
} from '../medlecont/css/elementsStyle';
import Elements from "../../../API/elements";
import {filter} from "../../../API/BackEnd";

const Upcont = ({zava}) => {
    const [searchText, setSearchText] = useState('');

    const [filterx, setFilter] = useState(99999)

    const [sort, setSort] = useState('')

    const [ele, setEle] = useState(Elements())

    function getSort(data) {
        setSort(data)
    }



    const fetchData = async (sortz, sear, filz) => {
        try {
            const data = await filter(sortz, sear, parseInt(filz));
            setEle(data)
            zava(data)

        } catch (error) {
            console.error('Помилка завантаження даних', error);
        }

    };





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
                        }}
                    />



                    <Searchbutt input={searchText} onClickCustom={() => fetchData(sort, searchText, filterx)} />
                    <Sortbutt returnType = {getSort}/>


                    <input type="text" value={filterx} onChange={(e) => {
                        const newValue = e.target.value;
                        setFilter(newValue);
                    }
                    }/>
                    <hr />

                </InputStyle>
            </div>
        </div>
    );
};

export default Upcont;
