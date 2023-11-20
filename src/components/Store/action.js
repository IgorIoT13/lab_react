import {findElementById} from "../API/BackEnd";


export function add_cart(state, obj, count_i) {
    let reap = false

    const count = parseInt(count_i)

    console.log(obj)

    if(typeof obj.description !== 'number'){
        if(count > 0){
            obj.description = count
        }
        else{
            obj.description = 1
        }
    }

    state.forEach(el => {
        if(el.id === obj.id){
            reap = true
            if(count > 0){
                el.description = parseInt(el.description) + count
            }
            else {
                el.description = parseInt(el.description) + 1
            }
        }
    })

    if(reap){
        return state
    }
    else{
        state.push(obj)
    }

    return state
}



export function remove_cart(state, id, count) {

    const result = []
    state.forEach(el => {
        if(el.id !== id){
            result.push(el)
        }
        else {
            if(parseInt(el.description) > parseInt(count)){
                console.log("Okey")
                el.description = parseInt(el.description) - parseInt(count)
                result.push(el)
            }
        }
    })

    return result

}