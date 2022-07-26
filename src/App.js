import './App.css';
import GeItems from './GeItems';
import useFilterGeItems from './component/usefilterGeItems';
import useLoadGeItems from './component/useLoadGeItems';
import useLoadGePrices from './component/useLoadGePrices';
import Navbar from './component/Navbar';
import { useState } from 'react';


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
    if(quantity < 1) return;
    
    setCart(prevCart =>{
      prevCart[item] = parseInt(quantity);
      return prevCart;
    });
    calcTotalQuantity(cart);
    console.log(totalQuantity);
  }

  const calcTotalQuantity = (cart) =>{
    setTotalQuantity(Object.keys(cart).map(item=> cart[item]).reduce((prev, curr)=>{
      return prev += curr
    }, 0));
  }

  return (
    <div className="App">
      <Navbar filterItemsByName={filterItemsByName} totalQuantity={totalQuantity}/>
      <GeItems items={filteredItems} prices={prices} addToCart={addToCart} />
    </div>
  );
}

export default App;
