import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

const useGeItem = ()=>{
  const [item, setItem] = useState([]);

  const fetchItem = async ()=>{
    const url = "https://prices.runescape.wiki/api/v1/osrs/mapping";
    const response = await fetch(url, {mode: "cors"});
    
    const data = await response.json();
    
    const ids = data.map(item => item.id);
    const itemId = ids[Math.floor(Math.random() * ids.length)]
    //console.log(data.filter((item)=>item.id == itemId));
    const itemSrc = `https://secure.runescape.com/m=itemdb_oldschool/obj_sprite.gif?id=${itemId}`
    setItem(itemSrc);
  };

  useEffect = (()=>{
    fetchItem();
  }, []);  

  return {item, fetchItem}
}


function App() {
//endpoint for accessing ge item images 
//https://secure.runescape.com/m=itemdb_oldschool/obj_sprite.gif?id=3200 <---adamant halberd

 const {item, fetchItem} = useGeItem([]);
  

  fetchItem();


  return (
    <div className="App">
        <img src={item} height="100px" width="100px"/>
    </div>
  );
}

export default App;
