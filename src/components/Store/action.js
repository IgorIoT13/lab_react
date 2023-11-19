import {findElementById} from "../API/BackEnd";


export function add_cart(state, id) {
    let data = null
    let count = 0

    const fetchElements = async () => {
        try {
            data = await findElementById(id);
        } catch (error) {
            alert('Ой-ой здається щось не так')
        }
    };

    fetchElements();


    if(data != null){
        state.forEach(el =>{
            if(el.id === data.id){
                count += 1
            }
        })

        if (count <= 0) {
            return state.push(data)
        }
        else {
            return state
        }
    }
    else {
        return state
    }

}

export function remove_cart(state, id) {

    const result = []
    state.forEach(el => {
        if(el.id !== id){
            result.push(el)
        }
    })

    return result

}