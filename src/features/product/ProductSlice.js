import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import productService from "../../services/productService";

const initialState = {
    products: [],
    loading: false,
    message: '',
    status: null
};

const PRODUCT_SLIDE = 'product';

const productSlice = createSlice({
    name: PRODUCT_SLIDE,
    initialState,
    reducers:{
    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = [...action.payload];
                return state;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                return state;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                console.log("updateProduct:", action.payload);
                const {products} = state;
                const index = products.findIndex(p => p.id === action.payload.id);
                products[index] = {
                    ...products[index],
                    ...action.payload,
                };
                return state;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                console.log("addProduct:", action.payload);
                state.products = [...state.products, action.payload];
                return state;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                console.log("deleteProduct:", action.payload);
                const {products} = state;
                const index = products.findIndex(({ id }) => id === action.payload.id);
                products.splice(index, 1);
                return state;
            })
            .addDefaultCase((state, action) => state)
    },
});

export const fetchProducts = createAsyncThunk(
    `${PRODUCT_SLIDE}/findAll`,
    async () => {
        const response =  await productService.getAll();
        console.log("fetchProducts===>", response);
        return response.data;
    }
);

export const fetchProductById = createAsyncThunk(
    `${PRODUCT_SLIDE}/findById`,
    async ({id} ) => {
        const response =  await productService.get(id);
        console.log("fetchProductById===>", response);
        return response.data;
    }
);

export const addProduct = createAsyncThunk(
    `${PRODUCT_SLIDE}/add`,
    async ({product} ) => {
        const response =  await productService.add(product);
        console.log("addProduct===>", response);
        return response.data;
    }
);

export const updateProduct = createAsyncThunk(
    `${PRODUCT_SLIDE}/update`,
    async ({id, product} ) => {
        // const sleep = ms => new Promise(r => setTimeout(r, ms));
        // await sleep(2000)
        const response =  await productService.update(id, product);
        console.log("updateProduct===>", response);
        return response.data;
    }
);

export const deleteProduct = createAsyncThunk(
    `${PRODUCT_SLIDE}/delete`,
    async ({id}) => {
        const response =  await productService.remove(id);
        console.log("deleteProduct===>", response);
        return response.data;
    }
);

export default productSlice.reducer;