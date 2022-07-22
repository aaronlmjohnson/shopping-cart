import {useState, useEffect} from 'react';

const useLoadGePrices = ()=>{
    const [prices, setPrices] = useState([]);
  
    const fetchPrices = async (name)=>{
      const url = `https://prices.runescape.wiki/api/v1/osrs/latest?`;
      //wiki ge complete item list https://prices.runescape.wiki/api/v1/osrs/mapping
      //wiki search by specific item with id https://prices.runescape.wiki/api/v1/osrs/latest?id=10344 <- 3rd age amulet
      
      const response = await fetch(url, {mode: 'cors'});
      
      const data = await response.json();
      setPrices(data.data);
    };
  
    useEffect(()=>{
      fetchPrices();
      console.log("Prices API loaded");
    }, []);  
  
    return {prices, fetchPrices}
}

export default useLoadGePrices;