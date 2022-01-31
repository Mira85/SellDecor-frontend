import ItemsToSell from "./ItemsToSell";
import Favorites from "./Favorites";
import "./Profile.scss";

function Profile(props) {
    console.log('profileprops', props)
    return (
        <div className="profileContainer">
            <div className="profileBoxOne">
              
                    {props.user ? <img style={{
                        height: "13.125rem",
                        width: "13.125rem",
                        borderRadius: "50%"
                    }}

                        src={props.user.photoURL} alt={props.user.displayName} /> : <h1>no image </h1>}

                    <div className="profileName">{props.user.displayName}</div>
<ul className="leftNav">
                  <li>  <button onClick={() => props.handleFavoriteSec(true)} className="profileNavBtn">Items To Sell</button></li>
                   <li> <button onClick={() => props.handleFavoriteSec(false)} className="profileNavBtn">Favorites</button></li>
             </ul>   
            </div>
            <div className="profileBoxTwo">
                {props.profileSec ? <ItemsToSell {...props} /> : <Favorites {...props} />}

            </div>

        </div>
    )

}

export default Profile;