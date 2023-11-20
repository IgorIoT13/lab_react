import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Element from "./component/element";
import {blockCart} from "./cssjs/styleCart";

const Cart = () => {
    // Отримання частини стану зі стору Redux
    const itemCart = useSelector((state) => state);

    return (
        <blockCart>
            {itemCart.map((elements, index) => (
                <Element key={index} post={elements} />
            ))}
        </blockCart>
    );
};

export default Cart;