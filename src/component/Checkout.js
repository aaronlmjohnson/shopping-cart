import './Checkout.css';
const Checkout = (props)=>{
    const { cart, removeFromCart } = props;

    return (
        <div id="checkout">
            <h1 id="shopping-cart-title">Shopping Cart</h1>
            {Object.keys(cart).map((key)=>{
                return (<ul className="cart-item" key={`c${cart[key].id}`}>
                        <li><img src={cart[key].img} alt={cart[key].name}/></li>
                        <li><h1>{cart[key].name}</h1></li>
                        <li className="cart-item-examine"><p>{cart[key].examine}</p></li>
                        <li><p>Qty: {cart[key].quantity}</p></li>
                        <li><p>{(cart[key].price * cart[key].quantity).toLocaleString('en-US')} gold</p></li>
                        <li><button onClick={(e)=>removeFromCart(e, key)}>delete</button></li>
                </ul>);
            })}
        </div>
    )
}

export default Checkout;