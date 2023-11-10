import React from 'react';
import img from '../../../Home/container/img/boing-1.jpg';
import {DivBlock} from "./style/Upcomp";

const Upitem = (props) => {
    return (
        <DivBlock>
            <article>
                <img src={img}/>
            </article>

            <aside>
                <h2>Title :<br/>{props.post.title}</h2>
                <h4>Description :<br/>{props.post.description}</h4>
                <p>Price :<br/>{props.post.fuel}</p>
            </aside>
        </DivBlock>
    );
};

export default Upitem;