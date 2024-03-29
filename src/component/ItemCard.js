import QuantitySelect from './QuantitySelect';
import './ItemCard.css';

const ItemCard = (props)=>{
    const  {name, examine, icon, id} = props.item;
    const { addToCart, quantity, setQuantity } = props;
    const price  = props.price ? props.price : {low: 0};
    const imgUrl = `https://oldschool.runescape.wiki/images/${icon.replaceAll(' ', '_')}`;
    const itemData = {...props.item, price: price.low, img: imgUrl};
    
    return (
        <li className="item-card">
            <h1 className="item-name">{name}</h1>
            <img className="item-icon" src={imgUrl} alt="Grand Exchange item" /> 
            <p className="item-examine">{examine}</p>
            <div className="price-div"> 
                <img src="https://oldschool.runescape.wiki/images/Coins_5.png?4afbb" alt="Coins" />
                <p className="price">{price.low.toLocaleString('en-US')}</p>
            </div>
            <button className="add-to-cart-button" onClick={(e)=> addToCart(e, itemData, quantity)}>Add</button>
            <QuantitySelect setQuantity={setQuantity} id={id}/>
            
        </li>
    )
}

export default ItemCard;