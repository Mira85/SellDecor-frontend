function Cart(props) {
    console.log('cartprops', props)
    return (
        <div>
            <h1>Cart</h1>
        
        {props.cartData.map((item) => (
            <div key={item._id} className="cartItem">
                <h1>{item.name}</h1>
                <img src={item.img} alt={item.name} style={{
                                    height: "16.125rem",
                                    width: "16.125rem",
                                }}/>
                <div>{item.price}</div>

            </div>
            )
            )}
        </div>
    )
}
export default Cart;