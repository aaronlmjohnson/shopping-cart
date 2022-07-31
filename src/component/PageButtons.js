const PageButtons = (props)=>{
    const { pageCount, setPage } = props;
    const pages = [];

    for(let i = 0; i < pageCount; i++) pages.push(i);

    return (
    <div id="page-buttons">
        {pages.map((page, i)=> <button key={i+1} onClick={()=>setPage(i)}>{i+1}</button>)}
    </div>
    );
}

export default PageButtons;