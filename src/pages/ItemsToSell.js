import CreateForm from "./CreateForm";
import UpdateForm from "./UpdateForm";

function ItemsToSell(props) {
    console.log("props.itemdata", props.itemsData)

    const handleClick = (itm) => {
        props.deleteCheese(itm._id);
    }

    const loaded = () => {
        return <div>

            <h1 className="indexHdr">Items to Sell</h1>
            <div className="areaTable">
                <table className="itemTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Settings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.itemsData.map((item) => {
                            const { name, category, img, price } = item;
                            return (

                                <tr key={item._id} className="tb-row">

                                    <td>{name}</td>
                                    <td>{category}</td>
                                    <td><img src={img} alt={name} /></td>
                                    <td>{price}</td>
                                    <td>
                                        <button onClick={() => props.handleUpdate(item)}>Update</button>
                                        <button onClick={() => handleClick(item)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    }

    const loading = () => {
        return <h1>Loading ...</h1>
    }
    return (
        <section>
            {props.value ? <CreateForm {...props} /> : <UpdateForm {...props} />}
            {props.itemsData ? loaded() : loading()}
        </section>
    )
}
export default ItemsToSell;