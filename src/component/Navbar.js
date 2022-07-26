import "./Navbar.css";
import Searchbar from './Searchbar';
import { Link } from "react-router-dom";


const Navbar = (props)=>{
    const {filterItemsByName, totalQuantity} = props;
    return (
        <nav >
            <Link to="/">Home</Link>
            <Searchbar filterItemsByName={filterItemsByName}/>
            <Link to="/checkout">{totalQuantity}<img src="https://oldschool.runescape.wiki/images/Basket.png?248b4" alt="Basket" id="checkout-icon"/></Link>
        </nav>
    )
}

export default Navbar;