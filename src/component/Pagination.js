import './Pagination.css';

const Pagination = (props)=>{
    const {pagesArr, handlePaginationClick} = props; 
    return( 
    <div id="pagination">
        <button className='back-page-button' onClick={(e)=> handlePaginationClick(e)}> {'<'} </button>
        {pagesArr.map((pageNum, i)=>
            <button className="pagination-button" onClick={(e)=> handlePaginationClick(e)} key={pageNum+1} value={pageNum}>{pageNum+1}</button>)}
        <button className='forward-page-button' onClick={(e)=> handlePaginationClick(e)}> {'>'} </button> 
    </div>);
}

export default Pagination;

