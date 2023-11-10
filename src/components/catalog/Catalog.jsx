import React, {createContext, useState} from 'react';

import Upcont from "./component/upcontend/Upcont";
import Content from "./component/medlecont/Content";

const MyContext = createContext('');

const Catalog = () => {

    const [search, setSearch] = useState('');


    const getParam = (data) =>{
        setSearch(data)
        console.log(data)
    }

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div>
            <Upcont sentSearch={getParam} />
            <Content search = {search} />
        </div>
    );
};
export default Catalog;