import {useState, useEffect} from 'react';

const usePageButtons = (pageCount, currentPage)=>{
    const [pagesArr, setPagesArr] = useState([]);
  
    const filterPageButtons = ()=>{
        setPagesArr(createNumOfPages(pageCount).filter((pageNum) => {
            return pageNum === currentPage || 
                   pageNum - 1 === currentPage ||
                   pageNum + 1 === currentPage ||
                   pageNum - 2 === currentPage ||
                   pageNum + 2 === currentPage
        }));
    }

    useEffect(()=>{
        filterPageButtons(pageCount);
    }, [pageCount, currentPage]);
  
    return {pagesArr,  filterPageButtons}
}

const createNumOfPages = (length)=>{
  const arr = [];
  for(let i = 0; i < length; i++) arr.push(i);
  return arr;
}

export default usePageButtons;

// I want to filter the page numbers to only show a range of +-2 
// ex. active page = 4 display  2 3 [4] 5 6
