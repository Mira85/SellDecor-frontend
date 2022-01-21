import {useState} from "react";

function UpdateForm (props) {

//state to hold formdata
const [editForm, setEditForm] = useState(props.eachItem);
   

//handleChange
const handleChange = (evt)=> {
    setEditForm((prevState) => ({
        ...prevState, [evt.target.name]:evt.target.value})
    )
}

//handlesubmit
const handleSubmit = (evt) => {
    evt.preventDefault()
    props.updateItem(editForm)
    setEditForm({
        name:"",
        category: "",
        img:"",
        price:"",
    })
} 




    return (
        <section>
            <form style={{marginTop: "5rem"}} onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.category}
                    name="category"
                    placeholder="Category"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.img}
                    name="img"
                    placeholder="imageURL"
                    onChange={handleChange}
                />
                 <input 
                    type="number"
                    value={editForm.price}
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Item" />
            </form>
     
        </section>
    )
}

export default UpdateForm;