function Cart(props) {
    console.log('cartprops', props)
    return ( 
        
        props.cartData.map((item) => (
        <div key={item._id} className="cartItem">
                <h1>{item.name}</h1>
           
            <img src={item.image} alt={item.name} />
            <div>{item.price}</div>
            
        </div>
    )
    )
    )}
export default Cart;