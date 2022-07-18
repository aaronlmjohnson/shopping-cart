import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import itemList from './itemListData.json';
import categoryData from './categoryData.json';

const useGeItem = ()=>{
  const [item, setItem] = useState([]);

  const fetchItem = async ()=>{
    const PAGE_LENGTH = 12; //Number of items displayed on GE Item page. 
    const NUM_OF_A_ITEMS = categoryData.alpha[1].items;

    const proxyPrefix = "https://cors-anywhere.herokuapp.com/";
    const url = `${proxyPrefix}https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=c&page=10`;
    //By Category: https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/category.json?category=9
    
    const response = await fetch(url, {mode: 'cors'});
    
    const data = await response.json();

    // console.log(data);
    console.log(data);

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
