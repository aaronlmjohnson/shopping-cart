import './App.css';
import {useState, useEffect} from 'react';
import Searchbar from './Searchbar';
import GeItems from './GeItems';
import useGeItems from './useGeItems';

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
