const Searchbar = (props)=>{
    const {fetchItems} = props;
    return (
        <div id="searchbar">
            <input type="text" onChange={(e)=>fetchItems(e.target.value)}></input>
        </div>
    )
}

export default Searchbar;