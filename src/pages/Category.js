import Collection from "../pages/Collection";
import Cart from "../pages/Cart";
import "./Category.scss"

function Category(props) {
    console.log('category props', props)
    return (
        <div className="collectionContainer">
            <div className="collection">
                <Collection dataForCategory={props.categoryData} />
            </div>
            <div className="cart">
                <Cart dataForCart={props.cartData} />
            </div>
        </div>
    )
};

export default Category;
