import GeItems from "./GeItems";
import Pagination from "./Pagination";

const Home = (props)=>{
    const {filteredItems, prices, addToCart, pagesArr} = props;
    
    return (
        <div className="Home">
            <GeItems items={filteredItems} prices={prices} addToCart={addToCart} />
            <Pagination pagesArr={pagesArr} />
        </div>
    );
}

export default Home;