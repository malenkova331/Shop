import './header.css'
import {useNavigate} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import { setShowCart } from "../../store/slices/cartSlice";
import {Cart} from "../cart/cart"

export function Header(){
    const navigate = useNavigate()
    function handleClick() {
        navigate('/')
    }
    const dispatch = useAppDispatch();
    const elements = useAppSelector((state) => state.cart.itemList);
    const state = useAppSelector((state) => state.cart.showCart);
    const showElements = () => {
        dispatch(setShowCart(state));
        console.log(state)
    };
    return(
        <div className="Header">
            <button className='HeaderButton' onClick={handleClick}>
                STORE
            </button>
            <button className='HeaderButton' onClick={showElements}>Cart: {elements.length}</button>
            {state &&
                <Cart />
            }
        </div>
    )
}