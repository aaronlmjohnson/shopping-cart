import ItemCard from "./ItemCard";
import {useState} from 'react'
import "./GeItems.css";

const GeItems = (props)=>{

    const { items, prices, addToCart } = props;
    const [quantity, setQuantity] = useState(0);

    return (
        <ul className="ge-items">
            {
                items && items.map((item)=>{ 
                return <ItemCard 
                item={item} 
                price = {prices[item.id]} 
                key={item.id} 
                addToCart={addToCart}
                setQuantity={setQuantity}
                quantity={quantity}
                />
                })
            }
        </ul>
    )
}

export default GeItems;