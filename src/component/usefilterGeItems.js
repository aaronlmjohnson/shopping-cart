import {useState, useEffect} from 'react';

const useFilterGeItems = (items)=>{
    const [filteredItems, setFilteredItems] = useState([]);
  
    const filterItemsByName = (name)=>{
      const filtered = items.filter((item)=> item.name.toLowerCase().includes(name));
      setFilteredItems(filtered.length < 12 ? filtered : filtered.slice(0, 12));
    };

    useEffect(()=>{
      setFilteredItems(items.slice(0, 12));
    }, [items])
   
  
    return {filteredItems, filterItemsByName}
}

export default useFilterGeItems;