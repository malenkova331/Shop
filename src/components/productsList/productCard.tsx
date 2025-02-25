import { IProduct } from "../../utils/interfaces"
import Col from 'react-bootstrap/Col';
import {useNavigate} from 'react-router-dom'
import {useAppDispatch} from "../../store/hooks";
import { addToCart } from "../../store/slices/cartSlice";


interface ProductCardProps{
    product:IProduct
}

export function ProductCardItem({product}:ProductCardProps){
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    function handleClick() {
        navigate('/product/'+product.id)
    }
    const addCart = () => {
        const title = product.title
        const id = product.id
        const price = product.price
        dispatch(addToCart({ title, id, price, totalPrice: price }));
        console.log('added'+ product.id)
    }
    return(
        
        <Col>
            <div className="productCardItem">
                <div onClick={handleClick} className="PCInfo" >
                    <img src={product.images[0]} alt="" className="PCImg" />
                    <h2 className="PCTitle">
                        {product.title}
                    </h2>
                    <p className="PCDesc">
                        {product.description}
                    </p>
                    
                </div>
                
                <div className="PCFooter">
                    <button className="PCButton"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="Like" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/> </svg> </button>
                    <button onClick={addCart} className="PCButton"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="Add" viewBox="0 0 16 16"> <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/> <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> </svg></button>
                    <p className="PCPrice">{product.price} $</p>
                </div>
            </div>
        </Col>
        
    )
}
