import { PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../utils/interfaces"
import { createAppSlice } from "../createAppSlice"


interface ProductState{
    loading: boolean
    error: string
    products: IProduct[]
}

const initialState: ProductState = {
    loading: false,
    error: '',
    products: []
}

export const productSlice = createAppSlice({
    name: 'product',
    initialState,
    reducers:{
        fetching(state){
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<IProduct[]>){
            state.loading = false
            state.products = action.payload
        },
        fetchError(state, action: PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }
    }
})

export default productSlice.reducer