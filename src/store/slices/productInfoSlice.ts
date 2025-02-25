import {IProductInfo} from "../../utils/interfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ProductInfoState {
    product: IProductInfo | null
    loading: boolean
    error: string
}

const initialState: ProductInfoState = {
    product: null,
    loading: false,
    error: ''
}

export const productInfoSlice = createSlice({
    name: 'productInfo',
    initialState,
    reducers: {
        productInfoFetching(state) {
        state.loading = true
        },
        productInfoFetchingSuccess(state, action: PayloadAction<IProductInfo>) {
        state.loading = false
        state.error = ''
        state.product = action.payload
        },
        productInfoFetchingError(state, action: PayloadAction<Error>) {
        state.loading = false
        state.error = action.payload.message
        }
    }
})

export default productInfoSlice.reducer