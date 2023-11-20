import React, {useState} from 'react';
import {BackCart, blockCart, Garga} from "../cssjs/styleCart";
import {useDispatch, useSelector} from "react-redux";

const Element = (props) => {

    const [textDelete, setDelete] = useState(1)
    const [visbil, setVisibl] = useState(false)

    const [textDeleteS, setDeleteS] = useState(-1)


    const id = props.post.id

    const dispatch = useDispatch()
    const itemCart = useSelector(state => state)

    function remove() {
        dispatch({type:"REMOVE_CART", payload: {id}})
    }
    function removeOne(count) {
                dispatch({type:"REMOVE_CART", payload: {
                        id: id,
                        count: count
                    }})
    }



    return (
        <Garga>
            <h4>{props.post.title}</h4>

            <p>
                кількість:{props.post.description}
            </p>
            <div>
                {props.post.fuel}

                    <input
                        type={'number'}
                        value={textDelete}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            setDelete(newValue);
                            setDeleteS((newValue*(-1)))
                        }}
                    />

                    <BackCart onClick={() =>{
                        setVisibl(false)
                        removeOne(textDelete)

                    }
                    }>
                        Відняти
                    </BackCart>



                <BackCart onClick={()=>{
                    removeOne(textDeleteS)
                }}>
                    Додати
                </BackCart>
            </div>

        </Garga>
    );
};

export default Element;