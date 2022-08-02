import GeItems from "./GeItems";
import Pagination from "./Pagination";

const Home = (props)=>{
    const {filteredItems, prices, addToCart, pagesArr, setPage} = props;
    
    return (
        <div className="Home">
            <GeItems items={filteredItems} prices={prices} addToCart={addToCart} />
            <Pagination pagesArr={pagesArr} setPage={setPage} />
        </div>
    );
}

export default Home;