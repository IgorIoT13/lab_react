import React, {createContext, useState} from 'react';

import Upcont from "./component/upcontend/Upcont";
import Content from "./component/medlecont/Content";

const MyContext = createContext('');

const Catalog = ({dataSent}) => {

    const [search, setSearch] = useState('');

    const [sort, setSort] = useState('');

    const [filter, setFilter] = useState(99999)


    const getParam = (data) =>{
        setSearch(data)
        console.log(data)
    }

    const sortet = (data) => {
        setSort(data)
    }

    const handleChange = (event) => {
        setSearch(event.target.value);
    };


    const haveFilter = (data) => {
        setFilter(data)
    }


    return (
        <div>
            <Upcont sentSearch={getParam} sentType={sortet} sentFilter={haveFilter} />
            <Content search = {search} sort = {sort} filter={filter} sentdata ={dataSent}/>
        </div>
    );
};
export default Catalog;