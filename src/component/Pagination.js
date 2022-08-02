import './Pagination.css';

const Pagination = (props)=>{
    const {pagesArr} = props; 

    return( 
    <div id="pagination">
        {pagesArr.map((pageNum)=><button className="pagination-button" key={pageNum+1}>{pageNum+1}</button>)}
    </div>);
}

export default Pagination;

//To make the buttons I need to know:
//How many filtered pages there are
//the current active page

