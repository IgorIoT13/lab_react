import React from 'react';

const Upitem = (props) => {
    return (
        <div>
            <article>
                <img src={props.post.img}/>
            </article>

            <aside>
                <h2>{props.post.header}</h2>

                <h4>{props.post.text}</h4>

            </aside>
        </div>
    );
};

export default Upitem;