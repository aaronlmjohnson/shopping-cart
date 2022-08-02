import './Home.css';
import GeItems from "./GeItems";
import Pagination from "./Pagination";

const Home = (props)=>{
    const {filteredItems, prices, addToCart, pagesArr, setPage, page} = props;
    
    return (
        <div className="home">
            <GeItems items={filteredItems} prices={prices} addToCart={addToCart} />
            <Pagination pagesArr={pagesArr} setPage={setPage} page={page} />
        </div>
    );
}

export default Home;