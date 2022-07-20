import {useState, useEffect} from 'react';

const useFilterGeItems = (items)=>{
    const [filteredItems, setFilteredItems] = useState([]);
  
    const filterItemsByName = (name)=>{
      const filtered = items.filter((item)=> item.name.toLowerCase().includes(name));
      setFilteredItems(filtered.length < 48 ? filtered : filtered.slice(0, 47));
    };

    useEffect(()=>{
      setFilteredItems(items.slice(0, 47));
    }, [items])
   
  
    return {filteredItems, filterItemsByName}
}

export default useFilterGeItems;