const Searchbar = (props)=>{
    const {filterItemsByName} = props;
    return (
        <div id="searchbar">
            <input type="text" onChange={(e)=>filterItemsByName(e.target.value)}></input>
        </div>
    )
}

export default Searchbar;