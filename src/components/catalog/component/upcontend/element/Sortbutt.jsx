import React, {useState} from 'react';

import {SortStyle} from "../css/buttonStyle";

const Sortbutt = () => {
    const [sortByTitle, setSortByTitle] = useState(false);
    const [sortByCost, setSortByCost] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <SortStyle>
            <button onClick={handleClick} style={{backgroundColor: "white", margin:0, padding:0, border: "none"}}>
                Сортувати
            </button>
            <ul style={{display: isOpen ? "block" : "none"}}>
                <li>
                    <input type="checkbox" checked={sortByTitle} onChange={() => setSortByTitle(!sortByTitle)} multiple={false} />
                    За назвою
                </li>
                <li>
                    <input type="checkbox" checked={sortByCost} onChange={() => setSortByCost(!sortByCost)} multiple={false} />
                    За ціною
                </li>
            </ul>
        </SortStyle>
    );
};

export default Sortbutt;
