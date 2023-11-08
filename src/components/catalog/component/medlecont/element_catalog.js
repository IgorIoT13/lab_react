import {getAlllight} from "../../../API/BackEnd";

export function SetAll (){
    let promise = getAlllight()

    let result = []
    promise.then(data => {
        data.forEach(obj => {
            result.push(obj)
        })
    });

    console.log(result)

    return result
}