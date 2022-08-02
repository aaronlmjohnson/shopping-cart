import './Pagination.css';

const Pagination = (props)=>{
    const {pagesArr, setPage} = props; 

    return( 
    <div id="pagination">
        <button> {'<'} </button>
        {pagesArr.map((pageNum, i)=>
            <button className="pagination-button" onClick={(e)=> setPage(parseInt(e.target.value))} key={pageNum+1} value={pageNum}>{pageNum+1}</button>)}
        <button> {'>'} </button>

    </div>);
}

export default Pagination;

//To make the buttons I need to know:
//How many filtered pages there are
//the current active page

