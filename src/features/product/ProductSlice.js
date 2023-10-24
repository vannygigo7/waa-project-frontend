import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import productService from "../../services/sellerProductService";
import {TEST_PRODUCT_SLICE} from "../../constant/testProduct";

const initialState = {
    products: [],
    loading: false,
    statusText: '',
    status: null
};

const testProductSlice = createSlice({
    name: TEST_PRODUCT_SLICE.NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsTest.fulfilled, (state, action) => {
                console.log("fetchProductsTest reducer", action.payload);
                const {data, status, statusText} = action.payload;
                state = {...state, status, statusText, products: data};
                return state;
            })
            .addCase(fetchProductByIdTest.fulfilled, (state, action) => {
                console.log("fetchProductById:", action.payload);
                const {status, statusText} = action.payload;
                state = {...state, status, statusText};
                return state;
            })
            .addCase(updateProductTest.fulfilled, (state, action) => {
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
            .addCase(addProductTest.fulfilled, (state, action) => {
                console.log("addProduct:", action.payload);
                const {data, status, statusText} = action.payload;
                state = {...state, status, statusText, products: [...state.products, data]};
                return state;
            })
            .addCase(deleteProductTest.fulfilled, (state, action) => {
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

export const fetchProductsTest = createAsyncThunk(
    TEST_PRODUCT_SLICE.GET_ALL,
    async () => {
        const response = await productService.getAll();
        console.log("test fetchProducts http===>", response);
        const {data, status, statusText} = response;
        return {data, status, statusText};
    }
);

export const fetchProductByIdTest = createAsyncThunk(
    TEST_PRODUCT_SLICE.GET_BY_ID,
    async ({id}) => {
        const response = await productService.getById(id);
        console.log("fetchProductById===>", response);
        const {data, status, statusText} = response;
        return {data, status, statusText};
    }
);

export const addProductTest = createAsyncThunk(
    TEST_PRODUCT_SLICE.ADD,
    async ({product}) => {
        const response = await productService.add(product);
        console.log("addProduct===>", response);
        const {data, status, statusText} = response;
        return {data, status, statusText};
    }
);

export const updateProductTest = createAsyncThunk(
    TEST_PRODUCT_SLICE.UPDATE,
    async ({id, product}) => {
        const response = await productService.update(id, product);
        console.log("updateProduct===>", response);
        const {data, status, statusText} = response;
        return {data, status, statusText};
    }
);

export const deleteProductTest = createAsyncThunk(
    TEST_PRODUCT_SLICE.DELETE,
    async ({id}) => {
        const response = await productService.remove(id);
        console.log("deleteProduct===>", response);
        const {data, status, statusText} = response;
        return {data, status, statusText, id};
    }
);

export default testProductSlice.reducer;