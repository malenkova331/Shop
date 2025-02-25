import './productsList.css'
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchProducts } from "../../store/actions/productActions"
import { ProductCardItem } from "./productCard"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export function ProductsList(){
    const dispatch = useAppDispatch()
    const {error, loading, products} = useAppSelector(state =>state.product)
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    
    return(
        <div className='productList'>
            <Container>
                <Row>
                    {
                        products.map(product => <ProductCardItem key={product.id} product={product} />)
                    }
                </Row>
            </Container>
        </div>
        
    )
}