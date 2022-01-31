import "./ItemsToSell.scss";
import Table from "react-bootstrap/Table";
import CreateForm from "./CreateForm";
import UpdateForm from "./UpdateForm";

function ItemsToSell(props) {
    console.log("props.itemdata", props)

    const handleClick = (itm) => {
        props.deleteItem(itm._id);
    }

    const loaded = () => {
        return (
        <div>

            <div className="areaTable">
                <Table  hover className="itemTable">
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
                                    <td><img src={img} alt={name} style={{
                    height: "3.125rem",
                    width: "3.125rem"}} /></td>
                                    <td>{price}</td>
                                    <td>
                                        <button onClick={() => props.handleUpdate(item)} className="updateDeleteBtn">Update</button>
                                        <button onClick={() => handleClick(item)} className="updateDeleteBtn">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
        )

    }

    const loading = () => {
        return <h1>Loading ...</h1>
    }
    return (
        <section className="profileSection">
           <div> {props.value ? <CreateForm {...props} /> : <UpdateForm {...props} />}</div>
           <div>{props.itemsData ? loaded() : loading()} </div>
        </section>
    )
}
export default ItemsToSell;