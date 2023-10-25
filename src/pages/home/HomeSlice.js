import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HOME_SLICE } from "../../constant/home";
import homeService from "../../services/homeService";

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
                const { data, status, statusText } = action.payload;
                state = { ...state, status, statusText, products: data };
                return state;
            })
            .addCase(searchHomeProducts.fulfilled, (state, action) => {
                console.log("searchHomeProducts reducer:", action.payload);
                const { data, status, statusText } = action.payload;
                state = { ...state, status, statusText, products: data };
                return state;
            })
            .addCase(fetchHomeProductById.fulfilled, (state, action) => {
                console.log("fetchHomeProductById reducer:", action.payload);
                const { data, status, statusText } = action.payload;
                state = { ...state, status, statusText, products: data };
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
        const { data, status, statusText } = response.data;
        return { data, status, statusText };
    }
);

export const searchHomeProducts = createAsyncThunk(
    HOME_SLICE.SEARCH_BY,
    async (params) => {
        const response = await homeService.searchHomeProducts(params);
        const { data, status, statusText } = response.data;
        return { data, status, statusText };
    }
);

export const fetchHomeProductById = createAsyncThunk(
    HOME_SLICE.GET_BY_ID,
    async ({ id }) => {
        const response = await homeService.getById(id);
        console.log("fetchHomeProductById http===>", response);
        const { data, status, statusText } = response.data;
        return { data, status, statusText };
    }
);

export const getHomeProductById =
    async ({ id }) => {
        const response = await homeService.getById(id);
        console.log("getHomeProductById http===>", response);
        const { data, status, statusText } = response.data;
        return { data, status, statusText };
    };

export default homeProductSlice.reducer;
