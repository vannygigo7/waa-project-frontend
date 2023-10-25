import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CUSTOMER_SLICE} from "../../constant/customer";
import customerService from "../../services/customerService";

const initialState = {
    auctions: [],
    loading: false,
    statusText: '',
    status: null
};

const customerSlice = createSlice(
    {
        name: CUSTOMER_SLICE.NAME,
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(addBid.fulfilled, (state, action) => {
                    console.log("addBid reducer:", action.payload);
                    const {data, status, statusText} = action.payload;
                    state = {...state, status, statusText, auctions: [...state.auctions, data]};
                    return state;
                })
                .addCase(fetchCustomerAuctions.fulfilled, (state, action) => {
                    console.log("fetchCustomerAuctions reducer:", action.payload);
                    const {data, status, statusText} = action.payload;
                    state = {...state, status, statusText, auctions: [...state.auctions, data]};
                    return state;
                })
                .addDefaultCase((state, action) => state)
        }
    }
);

export const addBid = createAsyncThunk(
    CUSTOMER_SLICE.ADD,
    async ({auctionId, bidData}) => {
        const response = await customerService.addBid({auctionId, data: bidData});
        console.log("addBid http===>", response);
        const {data, statusCode, message} = response.data;
        return {data, statusCode, message};
    }
);

export const fetchCustomerAuctions = createAsyncThunk(
    CUSTOMER_SLICE.GET_ALL,
    async () => {
        const response = await customerService.getAll();
        console.log("fetchCustomerAuctions http ===>", response);
        const {data, status, statusText} = response.data;
        return {data, status, statusText};
    }
);

export default customerSlice.reducer;