function Favorites(props) {
    console.log('favorte props', props)
    return (
        <div>
    <h1>Favorites</h1>
           { props.favorites.map((item) => (
        <div key={item._id} className="cartItem">
                <h1>{item.name}</h1>
           
            <img src={item.image} alt={item.name} />
            <button onClick={()=>props.handleDeleteFavorite(item)}>Delete</button>
            
        </div>

    )
    )
}

        
    </div>

        )
}

export default Favorites;