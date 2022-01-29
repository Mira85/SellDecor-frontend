import "./Favorites.scss";

function Favorites(props) {
    console.log('favorte props', props)
    return (
        <div className="favoriteContainer">
    <h1>Favorites</h1>
           { props.favorites.map((item) => (
        <div key={item._id} className="cartItem">
                <h3>{item.name}</h3>
           
            <img src={item.img} alt={item.name} style={{
                                    height: "6.125rem",
                                    width: "6.125rem",
                                }} />
            <button onClick={()=>props.handleDeleteFavorite(item)} className="favoriteDeleteBtn">Delete</button>
            
        </div>

    )
    )
}

        
    </div>

        )
}

export default Favorites;