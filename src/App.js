import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import itemList from './itemListData.json';
import categoryData from './categoryData.json';

const useGeItem = ()=>{
  const [item, setItem] = useState([]);

  const fetchItem = async (name)=>{
    const PAGE_LENGTH = 12; //Number of items displayed on GE Item page. 
    const NUM_OF_A_ITEMS = categoryData.alpha[1].items;

    const proxyPrefix = "https://cors-anywhere.herokuapp.com/";
    const url = `https://prices.runescape.wiki/api/v1/osrs/mapping`;
    //wiki ge complete item list https://prices.runescape.wiki/api/v1/osrs/mapping
    //wiki search by specific item with id https://prices.runescape.wiki/api/v1/osrs/latest?id=10344 <- 3rd age amulet
    
    const response = await fetch(url, {mode: 'cors'});
    
    const data = await response.json();

    // console.log(data);
    console.log(data.filter((item)=>{}))
    
    //*** Might be able to use the RS Wiki API to filter items by name, get that ID number, and then apply it to RS GE API to get pricing info */

    //when searching for an item
      //they're displayed by page
      //first letter is a given
      //when the second letter is typed
        //check if any item has that 2nd character 
          //if that may be the correct page
            //repeat again for the 3rd character
    
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
      {
        item && Object.keys(item).map(key =>{
          return <p>{`${key}: ${item[key]}`}</p>
        })
      }
    </div>
  );
}

export default App;
