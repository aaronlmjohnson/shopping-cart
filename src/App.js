import './App.css';
import {useState, useEffect} from 'react';
import Searchbar from './Searchbar';


const useGeItem = ()=>{
  const [item, setItem] = useState([]);

  const fetchItem = async (name)=>{
    const url = `https://prices.runescape.wiki/api/v1/osrs/mapping`;
    //wiki ge complete item list https://prices.runescape.wiki/api/v1/osrs/mapping
    //wiki search by specific item with id https://prices.runescape.wiki/api/v1/osrs/latest?id=10344 <- 3rd age amulet
    
    const response = await fetch(url, {mode: 'cors'});
    
    const data = await response.json();

    //console.log(data);
    //TODO: Implement simple search bar to search item by name and display the item names that match on screen
    const id = data.filter((item)=> item.name[0].toLowerCase() === '3' )
    console.log(id);
    
  };



  useEffect(()=>{
    fetchItem();
  }, []);  

  return {item, fetchItem}
}


function App() {

 const {item, fetchItem} = useGeItem([]);

  return (
    <div className="App">
      <Searchbar />
    </div>
  );
}

export default App;
