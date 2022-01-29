import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./Collection.scss";

function Collection(props) {
    console.log('collection', props)

    const loaded = () => {
        return <div className="collectionArea">

            <h1 className="indexHdr">Items to Sell</h1>
            <div className="itemArea">

                {props.categoryItems.map((item) => {
                    const { name, category, img, price } = item;
                    console.log('collection img url', img)
                    return (
                        <div key={item._id} className="eachItem">
                            <Card style={{ width: "16rem" }}>
                                <Card.Img variant="top" src={img} style={{
                                    height: "16rem",
                                    width: "16rem",
                                }} className="image" />
                                <MdFavorite onClick={() => props.handleAddFavorite(item)} className="FaHeart" />
                                <Card.Body >
                                    <div className="card">
                                        <div className="cardTitle">
                                       <Card.Title className="itemName">{name}</Card.Title>
                                       </div>
                               
                                    <div className="cardBody">
                                    <Card.Text>
                                        <div className="cardPrice">${price}</div>
                                        <button onClick={() => props.handleAddToCart(item)}   className="cartBtn">Add to Cart</button>
                                    </Card.Text>
                                    </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}


            </div>
        </div>

    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return props.categoryItems ? loaded() : loading();

}





export default Collection;