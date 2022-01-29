import "./Cart.scss";

function Cart(props) {
    console.log('cartprops', props)
    return (
        <div>
            <h1 className="cartHdr">Cart</h1>
        
        {props.cartData.map((item) => (
            <div key={item._id} className="cartItem">
                <h3 className="cartItem">{item.name}</h3>
                <img src={item.img} alt={item.name} style={{
                                    height: "6.125rem",
                                    width: "6.125rem",
                                }}/>
                <div>{item.price}</div>

            </div>
            )
            )}
        </div>
    )
}
export default Cart;