import ItemCard from "./ItemCard";
import "./GeItems.css";

const GeItems = (props)=>{

    const { items, prices, addToCart } = props;
    // console.log(items[0]);

    return (
        <ul className="ge-items">
            {
                items && items.map((item)=> <ItemCard item={item} price = {prices[item.id]} key={item.id} addToCart={addToCart}/>)
            }
        </ul>
    )
}

export default GeItems;