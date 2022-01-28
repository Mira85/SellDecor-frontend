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
                            <Card style={{ width: "18rem" }}>

                                <Card.Img variant="top" src={img} style={{
                                    height: "18rem",
                                    width: "18rem",
                                }} className="image" />
                                <MdFavorite onClick={() => props.handleAddFavorite(item)} className="FaHeart" />

                                <Card.Body>
                                    <Card.Title className="itemName">{name}</Card.Title>
                                    <Card.Text>
                                        <div>${price}</div>
                                    </Card.Text>
                                    <Button onClick={() => props.handleAddToCart(item)}   className="cartBtn">Add to Cart</Button>
                                </Card.Body>
                            </Card>



                            {/*                             <div className="imgContainer">
                                <img src={img} alt={name} style={{
                                    height: "16.125rem",
                                    width: "16.125rem",
                                }} />
                                <MdOutlineFavoriteBorder onClick={() => props.handleAddFavorite(item)} className="FaHeart" />
                                <MdOutlineShoppingCart onClick={() => props.handleAddToCart(item)} className="GiShoppingCart" />
                            </div>
                            <div className="itemName">{name}</div>
                            <div>{price}</div> */}

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