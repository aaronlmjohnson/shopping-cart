import GeItems from "./GeItems";
import Pagination from "./Pagination";

const Home = (props)=>{
    const {filteredItems, prices, addToCart} = props;
    
    return (
        <div className="Home">
            <GeItems items={filteredItems} prices={prices} addToCart={addToCart} />
            <Pagination />
        </div>
    );
}

export default Home;