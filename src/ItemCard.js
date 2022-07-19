const ItemCard = (props)=>{
    const  {name, id} = props.item;
    return (
        <li className="item-card" key={id}>
            {name}
        </li>
    )
}

export default ItemCard;