import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PRODUCT_SLICE} from "../../../constant/product";
import SellerProductService from "../../../services/sellerProductService";

const initialState = {
    products: [],
    loading: false,
    statusText: '',
    status: null
};

const sellerProductSlice = createSlice({
    name: PRODUCT_SLICE.NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                console.log("fetchProducts reducer:", action.payload);
                const {data, status, statusText} = action.payload;
                state = {...state, status, statusText, products: data};
                return state;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                console.log("fetchProductById:", action.payload);
                const {status, statusText} = action.payload;
                state = {...state, status, statusText};
                return state;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                console.log("updateProduct:", action.payload);
                let {products} = state;
                const {data, status, statusText} = action.payload;
                const index = products.findIndex(p => p.id === data.id);
                products[index] = {
                    ...products[index],
                    ...data,
                };
                state.status = status;
                state.statusText = statusText;
                return state;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                console.log("addProduct:", action.payload);
                const {data, status, statusText} = action.payload;
                state = {...state, status, statusText, products: [...state.products, data]};
                return state;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                console.log("deleteProduct:", action.payload);
                const {status, statusText, id} = action.payload;
                let {products} = state;
                const index = products.findIndex(({pid}) => pid === id * 1);
                (index > -1) && products.splice(index, 1);
                state = {...state, status, statusText, products};
                return state;
            })
            .addDefaultCase((state, action) => state)
    },
});

export const fetchProducts = createAsyncThunk(
    PRODUCT_SLICE.GET_ALL,
    async () => {
        const response = await SellerProductService.getAll({released: true});
        console.log("fetchProducts http ===>", response);
        const {data, status, statusText} = response.data;
        return {data, status, statusText};
    }
);

export const fetchProductById = createAsyncThunk(
    PRODUCT_SLICE.GET_BY_ID,
    async ({id}) => {
        const response = await SellerProductService.getById(id);
        console.log("fetchProductById===>", response);
        const {data, status, statusText} = response.data;
        return {data, status, statusText};
    }
);

export const addProduct = createAsyncThunk(
    PRODUCT_SLICE.ADD,
    async ({product}) => {
        const response = await SellerProductService.add(product);
        console.log("addProduct===>", response);
        const {data, status, statusText} = response;
        return {data, status, statusText};
    }
);

export const updateProduct = createAsyncThunk(
    PRODUCT_SLICE.UPDATE,
    async ({id, product}) => {
        const response = await SellerProductService.update(id, product);
        console.log("updateProduct===>", response);
        const {data, status, statusText} = response;
        return {data, status, statusText};
    }
);

export const deleteProduct = createAsyncThunk(
    PRODUCT_SLICE.DELETE,
    async ({id}) => {
        const response = await SellerProductService.remove(id);
        console.log("deleteProduct===>", response);
        const {data, status, statusText} = response;
        return {data, status, statusText, id};
    }
);

export default sellerProductSlice.reducer;
