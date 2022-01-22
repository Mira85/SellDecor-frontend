import Collection from "../pages/Collection";
import Cart from "../pages/Cart";
import "./Category.scss"

function Category(props) {
    return (
        <div className="collectionContainer">
            <div className="collection">
                <Collection {...props} />
            </div>
            <div className="cart">
                <Cart {...props} />
            </div>
        </div>
    )
};

export default Category;
