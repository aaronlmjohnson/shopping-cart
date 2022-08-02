import './Pagination.css';

const Pagination = (props)=>{
    const {pagesArr, setPage, page} = props; 
    console.log(pagesArr);
    return( 
    <div id="pagination">
        <button className='back-page-button' onClick={(e)=> setPage(page < 1 ? page : page-1)}> {'<'} </button>
        {pagesArr.map((pageNum, i)=>
            <button className="pagination-button" onClick={(e)=> setPage(parseInt(e.target.value))} key={pageNum+1} value={pageNum}>{pageNum+1}</button>)}
        <button className='forward-page-button' onClick={(e)=> setPage(pagesArr[pagesArr.length - 1] === page ? page : page+1)}> {'>'} </button> 
        

    </div>);
}

export default Pagination;

//think of way to stop forward button from working at the end of pages. 
