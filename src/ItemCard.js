import './ItemCard.css';

const ItemCard = (props)=>{
    const  {name, examine, icon, id} = props.item;
    const { price } = props;
    return (
        <li className="item-card">
            <h1 className="item-name">{name}</h1>
            <img className="item-icon" src={`https://oldschool.runescape.wiki/images/${icon.replaceAll(' ', '_')}`} alt="Grand Exchange item" /> 
            <p className="item-examine">{examine}</p>
            <div> 
                <img src="https://oldschool.runescape.wiki/images/Coins_250.png?c2755" alt="Coins" />
                <p className="price">{price.low}</p>
            </div>
            
        </li>
    )
}

export default ItemCard;