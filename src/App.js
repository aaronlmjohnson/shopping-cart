import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './component/Navbar';
import Checkout from "./component/Checkout";
import Home from './component/Home';
import useFilterGeItems from './component/usefilterGeItems';
import useLoadGeItems from './component/useLoadGeItems';
import useLoadGePrices from './component/useLoadGePrices';
import usePageButtons from './component/usePageButtons';

function App() {
  const { items } = useLoadGeItems([]);
  const { prices } = useLoadGePrices([]);
  const { filteredItems, filterItemsByName } = useFilterGeItems(items);
  const [ cart, setCart ] =  useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const { pagesArr } = usePageButtons(filteredItems.length, page);

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

  const handlePaginationClick = (e)=>{
    if(e.target.className === "pagination-button") setPage(parseInt(e.target.value))
    else if(e.target.className === "back-page-button") setPage(page < 1 ? page : page-1);
    else setPage(pagesArr[pagesArr.length - 1]);
  }

  return (
    <BrowserRouter >
      <div className="App">
      <Navbar filterItemsByName={filterItemsByName} totalQuantity={totalQuantity} setPage={setPage}/>
        <Routes>
          <Route path="/" element={
            <Home 
              filteredItems={filteredItems[page]} 
              prices={prices} addToCart={addToCart} 
              setPage = {setPage}
              page = {page}
              pagesArr = {pagesArr}
              handlePaginationClick={handlePaginationClick}
              />
            }>
          </Route>
          <Route path="/checkout" element={ <Checkout cart = {cart} removeFromCart={removeFromCart}/>}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
