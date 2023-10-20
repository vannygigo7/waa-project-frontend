import {PRODUCT} from "../../constant/product";

const initState = [];
export default function productReducer(prevState =  initState, action){
    const {type, data} = action;
    console.log("productReducer===>", data);
    switch (type){
        case PRODUCT.GET_ALL:
            return data;
        case PRODUCT.GET_BY_ID:
            return [...prevState, data];
        case PRODUCT.ADD:
            return [...prevState, data];
        case PRODUCT.UPDATE:
            const index = prevState.findIndex(p =>p.id === (data.id * 1));
            if(index === -1) return  [...prevState];
            let state =  [...prevState];
            state[index] = data;
            return state;
        case PRODUCT.DELETE:
            return [...prevState.filter(p => p.id !== (data.id * 1))];
        default:
            return prevState;
    }
}