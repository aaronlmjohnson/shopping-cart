import GeItems from "./GeItems";
import PageButtons from "./PageButtons";

const Home = (props)=>{
    const {filteredItems, prices, addToCart, pageCount, setPage} = props;
    
    return (
        <div className="Home">
            <GeItems items={filteredItems} prices={prices} addToCart={addToCart} />
            <PageButtons pageCount={pageCount} setPage={setPage} />
        </div>
    );
}

export default Home;