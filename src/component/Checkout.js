const Checkout = (props)=>{
    const { cart, removeFromCart } = props;

    return (
        <div id="checkout">
            {Object.keys(cart).map((key)=>{
                return (<div className="cart-item" key={`c${cart[key].id}`}>
                        <img src={cart[key].img} alt={cart[key].name}/>
                        <h1>{cart[key].name}</h1>
                        <p>{cart[key].examine}</p>
                        <p>Qty: {cart[key].quantity}</p>
                        <p>{(cart[key].price * cart[key].quantity).toLocaleString('en-US')} gold</p>
                        <button onClick={(e)=>removeFromCart(e, key)}>delete</button>
                </div>);
            })}
        </div>
    )
}

export default Checkout;