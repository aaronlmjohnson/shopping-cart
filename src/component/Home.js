import GeItems from "./GeItems";

const Home = (props)=>{
    const {filteredItems, prices, addToCart} = props;
    
    return (
        <div className="Home">
            <GeItems items={filteredItems} prices={prices} addToCart={addToCart} />
        </div>
    );
}

export default Home;