import Items from './Items';
import Favorites from './Favorites';

function Profile(props) {
    return (
        <div>
            <div className="profileDetails">
                Name:
                </div>
                <div className="itemsToSell">
                    <Items />
                </div>
                <div className="favorites">
                    <Favorites />
                </div>
        </div>
    )

}

export default Profile;