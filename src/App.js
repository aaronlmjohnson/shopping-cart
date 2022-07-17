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

    const item = data.filter(item => item.id === itemId)[0];
    const itemSrc = `https://secure.runescape.com/m=itemdb_oldschool/obj_sprite.gif?id=${itemId}`
    console.log(item);
    setItem(item);
  };

  useEffect(()=>{
    fetchItem();
  }, []);  

  return {item, fetchItem}
}


function App() {
//endpoint for accessing ge item images 
//https://secure.runescape.com/m=itemdb_oldschool/obj_sprite.gif?id=3200 <---adamant halberd

 const {item, fetchItem} = useGeItem([]);

  return (
    <div className="App">
      {
        item && Object.keys(item).map(key =>{
          return <p>{`${key}: ${item[key]}`}</p>
        })
      }
    </div>
  );
}

export default App;
