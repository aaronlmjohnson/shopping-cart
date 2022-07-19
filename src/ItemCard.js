import './ItemCard.css';

const ItemCard = (props)=>{
    const  {name, examine, icon, id} = props.item;
    return (
        <li className="item-card">
            <h1 className="item-name">{name}</h1>
            <img className="item-icon" src={`https://oldschool.runescape.wiki/images/${icon.replaceAll(' ', '_')}`} alt="Grand Exchange item" /> 
            <p className="item-examine">{examine}</p>
        </li>
    )
}

export default ItemCard;