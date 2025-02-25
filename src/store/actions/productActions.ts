import axios from "../../utils/axios"
import { productSlice } from "../slices/productSlice"
import {productInfoSlice} from "../slices/productInfoSlice"
import { AppDispatch } from "../store"

export const  fetchProducts = () =>{
    return async (dispatch: AppDispatch) =>{
        try{
            dispatch(productSlice.actions.fetching())
            const response = await axios.get( 'products' )
            dispatch(productSlice.actions.fetchSuccess(response.data.products))
        }catch (e) {
            dispatch(productSlice.actions.fetchError(e as Error))
        }
    }
} 


export const fetchProductInfo = (id: string | undefined) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productInfoSlice.actions.productInfoFetching())
            const response = await axios.get(`products/${id}`)
            dispatch(productInfoSlice.actions.productInfoFetchingSuccess(response.data))
        } catch (e) {
            dispatch(productInfoSlice.actions.productInfoFetchingError(e as Error))
        }
    }
}