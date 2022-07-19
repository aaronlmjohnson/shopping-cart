const ItemCard = (props)=>{
    const  {name, examine, icon, id} = props.item;
    return (
        <li className="item-card">
            <h1 className="item-name">{name}</h1>
            <img src="#" alt="Grand Exchange item" />
            <p className="item-examine">{examine}</p>
        </li>
    )
}

export default ItemCard;