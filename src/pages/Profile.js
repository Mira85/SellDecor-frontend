import ItemsToSell from "./ItemsToSell";
import Favorites from "./Favorites";
import "./Profile.scss";

function Profile(props) {
    console.log('profileprops', props)
    return (
        <div className="profileContainer">
            <div className="profilebox">
                <div className="profileDetails">
                    {props.user ? <img style={{
                        height: "13.125rem",
                        width: "13.125rem",
                        borderRadius: "50%"
                    }}

                        src={props.user.photoURL} alt={props.user.displayName} /> : <h1>no image </h1>}

                    <div className="profileName">{props.user.displayName}</div>

                    <button onClick={() => props.handleFavoriteSec(true)}>Items To Sell</button>
                    <button onClick={() => props.handleFavoriteSec(false)}>Favorites</button>
                </div>
            </div>
            <div className="itemsToSell">
                {props.profileSec ? <ItemsToSell {...props} /> : <Favorites {...props} />}

            </div>

        </div>
    )

}

export default Profile;