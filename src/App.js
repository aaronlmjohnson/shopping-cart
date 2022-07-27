import './App.css';
import GeItems from './component/GeItems';
import useFilterGeItems from './component/usefilterGeItems';
import useLoadGeItems from './component/useLoadGeItems';
import useLoadGePrices from './component/useLoadGePrices';
import Navbar from './component/Navbar';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Checkout from "./component/Checkout";
import Home from './component/Home';


// for(let i = 0; i < 121; i+=12){
//   splitByTwelve.push(numbers.slice(i, numbers[i+10-1] ? i+10 : numbers.length -1])); <-- for seperating into pages with twelve items each
// }
function App() {
  const { items } = useLoadGeItems([]);
  const { prices } = useLoadGePrices([]);
  const { filteredItems, filterItemsByName } = useFilterGeItems(items);
  const [ cart, setCart ] =  useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addToCart = (e, item, quantity)=>{
    if(quantity < 1 && item.quantity) return;
    
    setCart(prevCart =>{
      if(quantity === '0')
        delete prevCart[item.id];
      else
        prevCart[item.id] = {...item, quantity:parseInt(quantity)};
      return prevCart;
    });

    calcTotalQuantity(cart);
  }

  const removeFromCart = (e, id)=>{
    setCart(prevCart =>{

      delete prevCart[id];
      return {...prevCart};
    });

    calcTotalQuantity(cart);
  }

  const calcTotalQuantity = (cart) =>{
    setTotalQuantity(Object.keys(cart).map(item=> cart[item].quantity).reduce((prev, curr)=>{
      return prev += curr
    }, 0));
  }

  return (
    <BrowserRouter >
      <div className="App">
      <Navbar filterItemsByName={filterItemsByName} totalQuantity={totalQuantity}/>
        <Routes>
          <Route path="/" element={<Home filteredItems={filteredItems} prices={prices} addToCart={addToCart}/>}>
          </Route>
          <Route path="/checkout" element={ <Checkout cart = {cart} removeFromCart={removeFromCart}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
