import "./cart.css"
import {useAppSelector, useAppDispatch} from "../../store/hooks";
import { clearCart } from "../../store/slices/cartSlice";
import CartItem from "./cartItem";

export const Cart = () => {
    const dispatch = useAppDispatch();
    const elements = useAppSelector((state) => state.cart.itemList);
    const totalCartPrice  = useAppSelector((state) => state.cart.totalCartPrice);
    const clear = () => {
            dispatch(clearCart(elements));
        };
    if (elements.length > 0) {
        return (
        <>
            <div className="Cart">
                <h1>Cart</h1>
                {elements.map(item => <CartItem key={item.id} product={item}/>)}
                <p className="TotalPrice">Total Price: {totalCartPrice.toFixed(2)}$</p>
                <button className="Clear" onClick={clear}>Clear</button>
            </div>
        </>
        );
    } else {
        return <h1 className="Cart">Cart is empty</h1>;
    }
};
