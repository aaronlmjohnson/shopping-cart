import "./Navbar.css";
import Searchbar from './Searchbar';


const Navbar = (props)=>{
    const {filterItemsByName} = props;
    return (
        <nav >
            <a href="#">Home</a>
            <Searchbar filterItemsByName={filterItemsByName}/>
            <a href="#"><img src="https://oldschool.runescape.wiki/images/Basket.png?248b4" alt="Basket" id="checkout-icon"/></a>
        </nav>
    )
}

export default Navbar;