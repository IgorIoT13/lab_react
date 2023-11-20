import {add_cart, remove_cart} from "./action";

const defaultStore = []

export const reducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "ADD_CART":
            return add_cart(state, action.payload.id, action.payload.count)
        case "REMOVE_CART":
            return remove_cart(state, action.payload.id, action.payload.count)
        default:
            return state
    }
}