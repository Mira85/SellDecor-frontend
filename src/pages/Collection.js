import { MdFavorite } from "react-icons/md";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "react-bootstrap/Card";
import "./Collection.scss";

function Collection(props) {
    console.log('collection', props)

    const loaded = () => {
        return <div className="collectionArea">
                    {props.categoryItems.map((item) => {
                        const { name, img, price } = item;
                        console.log('collection img url', img)
                        return (
                                <Card className="eachCard" key={item._id} style={{ width: "12.5rem" }}>
                                    <Card.Img variant="top" src={img} style={{
                                        height: "15.5rem",
                                        width: "12.4rem",
                                    }} className="image" />
                                    <MdFavorite onClick={() => props.handleAddFavorite(item)} className="FaHeart" />
                                    <Card.Body  className="cardBody"> 
                                        <Card.Title className="cardTitle">{name}</Card.Title>
                                        <Card.Text className="cardText">
                                            <div className="cardPrice">${price}</div>
                                            <button onClick={() => props.handleAddToCart(item)}   className="addCartBtn" >Add to Cart</button>
                                        </Card.Text>  
                                    </Card.Body>
                                </Card>
                        )
                    })}
                </div>
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return props.categoryItems ? loaded() : loading();
}

export default Collection;