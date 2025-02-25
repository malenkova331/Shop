import {useAppDispatch} from "../../store/hooks";
import { addToCart,removeFromCart } from "../../store/slices/cartSlice";
import { IProductInCart } from "../../utils/interfaces"

interface ProductInCartProps{
    product:IProductInCart
}

const CartItem = ({product}:ProductInCartProps) => {
    const dispatch = useAppDispatch();
    const title = product.title;
    const id = product.id;
    const price = product.price;
    const quantity = product.quantity;
    const totalPrice = product.totalPrice;
    const addCart = () => {
        dispatch(addToCart({ title, price, id }));
    };
    const removeCart = () => {
        dispatch(removeFromCart({ id, quantity, totalPrice, price }));
    };
    return (
        <div className="CartItem">
            <h3 className="CITitle">{product.title}</h3>
            <p className="CIPrice">{product.price}$</p>
            <div className="CITotal">
                <p className="CIText">Quantity: {product.quantity}</p>
                <p className="CIText">Total Price: {product.totalPrice.toFixed(2)}$</p>
            </div>
            <div className="CIButtons">
                <button onClick={addCart} className="CIButton"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="20px"  width="20px"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></button>
                <button onClick={removeCart} className="CIButton"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="20px"  width="20px"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></button>
            </div>
        </div>
    );
};

export default CartItem;