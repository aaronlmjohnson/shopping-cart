import './Home.css';
import GeItems from "./GeItems";
import Pagination from "./Pagination";

const Home = (props)=>{
    const {filteredItems, prices, addToCart, pagesArr, handlePaginationClick} = props;
    
    return (
        <div className="home">
            <GeItems items={filteredItems} prices={prices} addToCart={addToCart} />
            <Pagination handlePaginationClick={handlePaginationClick} pagesArr={pagesArr} />
        </div>
    );
}

export default Home;