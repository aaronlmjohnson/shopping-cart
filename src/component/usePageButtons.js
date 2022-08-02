import {useState, useEffect} from 'react';

const usePageButtons = (pageCount)=>{
    const [pagesArr, setPagesArr] = useState([]);
  
    const filterPageButtons = ()=>{

        setPagesArr(createNumOfPages(pageCount));
    }

    useEffect(()=>{
        filterPageButtons(pageCount);
    }, [pageCount]);
  
    return {pagesArr,  filterPageButtons}
}

const createNumOfPages = (length)=>{
  const arr = [];
  for(let i = 0; i < length; i++) arr.push(i);
  return arr;
}

export default usePageButtons;

// filter the items based on search
// partition the filtered items into multiple different arrays based on desired length
// depending on the current page index, iterate through the selecte page to display items
