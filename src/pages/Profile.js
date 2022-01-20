import ItemsToSell from "./ItemsToSell";
import Favorites from "./Favorites";
import "./Profile.scss";

function Profile(props) {
    console.log('profileprops', props)
    return (
        <div className="profileContainer">
            <div className="profileDetails">
                Name:
                </div>
                <div className="itemsToSell">
                    <ItemsToSell {...props}/>
                </div>
                <div className="favorites">
                    <Favorites />
                </div>
        </div>
    )

}

export default Profile;