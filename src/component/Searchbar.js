const Searchbar = (props)=>{
    const {filterItemsByName, setPage} = props;
    return (
        <div id="searchbar">
            <input type="text" onChange={(e)=>{
                setPage(0);
                filterItemsByName(e.target.value);
            }}/>
        </div>
    )
}

export default Searchbar;