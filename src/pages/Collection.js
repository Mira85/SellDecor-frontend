import{MdOutlineFavoriteBorder, MdOutlineShoppingCart} from "react-icons/md";
import{GiShoppingCart} from "react-icons/gi";
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
                               
                                <div className="imgContainer">
                                <img src={img} alt={name} style={{
                                    height: "16.125rem",
                                    width: "16.125rem",
                                }} />
                                <MdOutlineFavoriteBorder onClick={() => props.handleAddFavorite(item)} className="FaHeart"/>
                                <MdOutlineShoppingCart onClick={() => props.handleAddToCart(item)} className="GiShoppingCart" />
                                </div>
                                <div className="itemName">{name}</div>
                                <div>{price}</div>
                                <div>
                                  
                                    
                                </div>
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