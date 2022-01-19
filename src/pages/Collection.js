import { Link } from "react-router-dom";

function Collection(props) {

    //loaded function
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

    return props.itemsArr.items ? loaded() : loading()
}

export default Collection;