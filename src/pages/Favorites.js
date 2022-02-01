import { TiDeleteOutline } from "react-icons/ti";
import "./Favorites.scss";

function Favorites(props) {
    console.log('favorte props', props)
    return (
        <div className="favoriteContainer">
            {props.favorites.map((item) => (
                <div key={item._id} className="favoriteItem">

                    <div className="favImgBox">
                        <img src={item.img} alt={item.name} className="favoriteItemImg" />
                        <div>{item.name}</div>
                    </div>
                    <TiDeleteOutline onClick={() => props.handleDeleteFavorite(item)} className="favoriteDeleteBtn" />

                </div>
            ))}
        </div>
    )
}

export default Favorites;