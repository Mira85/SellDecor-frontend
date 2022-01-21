import CreateForm from "./CreateForm";
import UpdateForm from "./UpdateForm";

function ItemsToSell(props) {
    console.log("props.itemdata", props.itemsData)

    const handleClick = (itm) => {
        props.deleteCheese(itm._id);
    }
    
    const loaded = () => {
        return (props.itemsData.map((item) => (
            <div key={item._id} className="item">
               <h3>{item.name}</h3>
               <h3>{item.countryOfOrigin}</h3>
               <button onClick={()=>props.handleUpdate(item)}>Update</button>
               <button onClick={()=>handleClick(item)}>Delete</button>  
            </div>)
        ))
    }
    
    const loading =() => {
        return <h1>Loading ...</h1>
    }
        return (
           <section>
                    {props.value ? <CreateForm {...props} /> : <UpdateForm {...props}/>}
                {props.itemsData ? loaded() : loading()}
            </section>
        )
}
export default ItemsToSell;