import {useState, useEffect} from 'react';
const PAGE_SIZE = 12;

const useFilterGeItems = (items)=>{
    const [filteredItems, setFilteredItems] = useState([]);
    const [pageCount, setPageCount] = useState([]);
  
    const filterItemsByName = (name)=>{
      const filtered = items.filter((item)=> item.name.toLowerCase().includes(name));
      setFilteredItems(divideIntoPages(filtered));
      setPageCount(createNumOfPages(filteredItems.length));
    };

    useEffect(()=>{
      setFilteredItems(divideIntoPages(items));
      setPageCount(createNumOfPages(filteredItems.length));
    }, [items]);
   
  
    return {filteredItems, filterItemsByName, pageCount}
}

const divideIntoPages =  (filteredItems)=>{
  const pages = [];
  for(let i = 0; i < filteredItems.length; i += PAGE_SIZE)
    pages.push(filteredItems.slice(i, i+PAGE_SIZE));
  return pages;
};

const createNumOfPages = (length)=>{
  const arr = [];
  for(let i = 0; i < length; i++) arr.push(i);
  return arr;
}

export default useFilterGeItems;

// filter the items based on search
// partition the filtered items into multiple different arrays based on desired length
// depending on the current page index, iterate through the selecte page to display items
