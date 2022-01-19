import Collection from './Collection';
import Cart from './Cart';

function Index(props) {
    return (
        <div>
                <div className="collection">
                    <Collection />
                </div>
                <div className="cart">
                    <Cart />
                </div>
        </div>
    )

}

export default Index;