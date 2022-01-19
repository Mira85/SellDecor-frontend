import ItemsToSell from './ItemsToSell';
import Favorites from './Favorites';

function Profile(props) {
    console.log(props.createItem)
    return (
        <div>
            <div className="profileDetails">
                Name:
                </div>
                <div className="itemsToSell">
                    <ItemsToSell createItemFunc={props}/>
                </div>
                <div className="favorites">
                    <Favorites />
                </div>
        </div>
    )

}

export default Profile;