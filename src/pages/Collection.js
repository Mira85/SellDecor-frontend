import { MdFavorite } from "react-icons/md";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Card from "react-bootstrap/Card";


import "./Collection.scss";

function Collection(props) {
    console.log('collection', props)

    const loaded = () => {
        return <div className="collectionArea">

            <h1 className="indexHdr">Items to Sell</h1>
            <div className="itemArea">

                {props.categoryItems.map((item) => {
                    const { name, img, price } = item;
                    console.log('collection img url', img)
                    return (
                        <div key={item._id} className="eachItem">
                            <Card style={{ width: "16rem" }}>
                                <Card.Img variant="top" src={img} style={{
                                    height: "16rem",
                                    width: "16rem",
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