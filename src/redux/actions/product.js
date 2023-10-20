import {PRODUCT} from "../../constant/product";
import productService from "../../services/productService";

export const getProductsAction = data => {
    return async dispatch => {
        let response =  await  productService.getAll();
        if(response.status === 200){
            data = response.data;
        }

        console.log("getProductsAction=>", data);
        return dispatch({type: PRODUCT.GET_ALL, data: data});
    };
};

export const getProductByIdAction = id => {
    return async dispatch => {
        try {
            let product;
            let response =  await  productService.get(id);
            if(response.status === 200){
                product = response.data;
            }

            console.log("getProductByIdAction=>", product);
            return dispatch({type: PRODUCT.GET_BY_ID, data: product});
        }catch (e) {
            return dispatch({type: PRODUCT.GET_BY_ID, data: {}});
        }
    };
};

export const addProductAction = product => {
    console.log("addProductAction 1=>", product);
    return async dispatch => {
        try {
            let response =  await  productService.add(product);
            if(response.status === 200){
                product = response.data;
            }
            console.log("addProductAction 2=>", product);
            return dispatch({type: PRODUCT.ADD, data: product});
        }catch (e) {
            return dispatch({type: PRODUCT.ADD, data: {}});
        }
    };
};

export const updateProductAction = (id, product) => {
    console.log("updateProductAction 1=>", id, product);
    return async dispatch => {
        let response = await productService.update(id, product);
        if(response.status === 200){
            product = response.data;
        }

        console.log("updateProductAction 2=>", product);
        return dispatch({type: PRODUCT.UPDATE, data: product});
    };
};

export const deleteProductAction = id => {
    return async dispatch => {
        let response =  await  productService.remove(id);
        console.log("deleteProductAction=>", id);
        console.log(response);
        return dispatch({type: PRODUCT.DELETE, data: {id: id}});
    };
};