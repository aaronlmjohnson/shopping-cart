import ItemCard from "./ItemCard";
import "./GeItems.css";

const GeItems = (props)=>{

    const { items } = props;

    return (
        <ul className="ge-items">
            {
                items && items.map((item)=> <ItemCard item={item} key={item.id}/>)
            }
        </ul>
    )
}

export default GeItems;