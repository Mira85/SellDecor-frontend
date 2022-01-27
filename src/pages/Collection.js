import{MdOutlineFavoriteBorder} from "react-icons/md";
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
                                <h2 className="itemHdr">{name}</h2>
                                <div className="imgContainer">
                                <img src={img} alt={name} style={{
                                    height: "16.125rem",
                                    width: "16.125rem",
                                }} />
                                <MdOutlineFavoriteBorder onClick={() => props.handleAddFavorite(item)} className="FaHeart"/>
                                </div>
                                
                                <div>{price}</div>
                                <div>
                                    <button onClick={() => props.handleAddToCart(item)}>Add to cart</button>
                                    
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