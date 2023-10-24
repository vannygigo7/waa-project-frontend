import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {HOME_SLICE} from "../../constant/home";
import homeService from "../../services/homeService";
import {PRODUCT_SLICE} from "../../constant/product";
import SellerProductService from "../../services/sellerProductService";

const initialState = {
    products: [],
    loading: false,
    statusText: '',
    status: null
};

const homeProductSlice = createSlice({
    name: HOME_SLICE.NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeProducts.fulfilled, (state, action) => {
                console.log("fetchHomeProducts reducer:", action.payload);
                const {data, status, statusText} = action.payload;
                state = {...state, status, statusText, products: data};
                return state;
            })
            .addCase(fetchHomeProductById.fulfilled, (state, action) => {
                console.log("fetchHomeProductById reducer:", action.payload);
                const {data, status, statusText} = action.payload;
                state = {...state, status, statusText, products: data};
                return state;
            })
            .addDefaultCase((state, action) => state)
    },
});

export const fetchHomeProducts = createAsyncThunk(
    HOME_SLICE.GET_ALL,
    async () => {
        const response = await homeService.getAll();
        console.log("fetchHomeProducts http ===>", response);
        const {data, status, statusText} = response.data;
        return {data, status, statusText};
    }
);

export const fetchHomeProductById = createAsyncThunk(
    HOME_SLICE.GET_BY_ID,
    async ({id}) => {
        const response = await homeService.getById(id);
        console.log("fetchHomeProducts http===>", response);
        const {data, status, statusText} = response.data;
        return {data, status, statusText};
    }
);

export default homeProductSlice.reducer;
