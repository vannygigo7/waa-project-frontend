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
                // const {products} = state;
                // console.log("find id1:", state.products);
                // const updatedProduct = action.payload;
                // console.log(products.map(p => {return (p.id === updatedProduct.id ? updatedProduct : p);}));
                // state.products = products;
                // console.log("find id:", products);
                return state;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                console.log("addProduct 1:", action.payload);
                state.products = [...state.products, action.payload];
                return state;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                console.log("deleteProduct:", action.payload);
                return state;
            })
            .addDefaultCase((state, action) => {})
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