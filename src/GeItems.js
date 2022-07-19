import ItemCard from "./ItemCard";

const GeItems = (props)=>{

    const { items } = props;

    return (
        <ul className="geItems">
            {
                items && items.map((item)=> <ItemCard item={item}/>)
            }
        </ul>
    )
}

export default GeItems;