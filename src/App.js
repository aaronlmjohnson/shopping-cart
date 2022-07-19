import './App.css';
import {useState, useEffect} from 'react';
import Searchbar from './Searchbar';
import ItemCard from './ItemCard';
import GeItems from './GeItems';


const useGeItems = ()=>{
  const [items, setItems] = useState([]);

  const fetchItems = async (name)=>{
    const url = `https://prices.runescape.wiki/api/v1/osrs/mapping`;
    //wiki ge complete item list https://prices.runescape.wiki/api/v1/osrs/mapping
    //wiki search by specific item with id https://prices.runescape.wiki/api/v1/osrs/latest?id=10344 <- 3rd age amulet
    
    const response = await fetch(url, {mode: 'cors'});
    
    const data = await response.json();

    const filteredItems = data.filter((item)=> item.name.toLowerCase().includes(name));
    setItems(filteredItems);
  };

  useEffect(()=>{
    fetchItems();
  }, []);  

  return {items, fetchItems}
}


function App() {

 const {items, fetchItems} = useGeItems([]);

  return (
    <div className="App">
      <Searchbar fetchItems={fetchItems}/>
      <GeItems items={items}/>
    </div>
  );
}

export default App;
