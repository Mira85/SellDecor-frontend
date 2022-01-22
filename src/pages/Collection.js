import { Link } from "react-router-dom";

function Collection(props) {

   return  <div>

    <h1 className="indexHdr">Items to Sell</h1>
<div className="areaTable">
    <table className="itemTable">
        <thead>
        <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Image</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {props.categoryData.map((item) => {
            const { name, category, img, price } = item;
            return (

                <tr key={item._id} className="tb-row">
            
                        <td>{name}</td>
                        <td>{category}</td>
                    <td><img src={img} alt={name} /></td>
                    <td>{price}</td>
                    <td><button onClick={()=>props.handleAddToCart(item)}>Add to cart</button><button>favorite</button></td>
                </tr>
            )
        })}
        </tbody>
    </table>
</div>
</div>
   /*  //loaded function
    const loaded = () => {
        return props.itemsArr.items.map((item) => (
            <div key={item._id} className="item">
                <Link to={`/item/${item._id}`}>
                    <h1>{item.name}</h1>
                </Link>
                <img src={item.image} alt={item.name} />
            </div>
        ))
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return props.itemsArr.items ? loaded() : loading() */
}





export default Collection;