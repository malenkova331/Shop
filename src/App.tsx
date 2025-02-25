import "./App.css"
import {Routes, Route} from 'react-router-dom'
import {useAppSelector} from "./store/hooks";
import { Header } from "./components/header/header"
import { ProductsList } from "./components/productsList/productsList"
import {ProductCardInfo} from "./components/productsList/productCardInfo"

const App = () => {
  const checkState = useAppSelector((state) => state.cart.showCart);
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path={"/"} element={<ProductsList />}/>
          <Route path={"/product/:id"} element ={<ProductCardInfo />} />
        </Routes>
      </div>
      
    </div>
  )
}

export default App
