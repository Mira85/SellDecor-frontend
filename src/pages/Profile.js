import ItemsToSell from "./ItemsToSell";
import Favorites from "./Favorites";
import "./Profile.scss";

function Profile(props) {
    console.log('profileprops', props)
    return (
        <div className="profileContainer">
            <div className="profileSection">
                <div className="profileBoxOne">
                    <div className="profileName">{props.user.displayName}</div>
                    <ul className="leftNav">
                        <li>  <button onClick={() => props.handleFavoriteSec(true)} className="profileNavBtn">My Decor</button></li>
                        <li> <button onClick={() => props.handleFavoriteSec(false)} className="profileNavBtn">Favorites</button></li>
                    </ul>
                </div>
                <div className="profileBoxTwo">
                    {props.profileSec ? <ItemsToSell {...props} /> : <Favorites {...props} />}
                </div>
            </div>
        </div>
    )
}

export default Profile;