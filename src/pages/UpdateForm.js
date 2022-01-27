import Form from "react-bootstrap/Form";
import {useState} from "react";

function UpdateForm (props) {

    console.log("updateform props", props)

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
            <Form style={{marginTop: "5rem"}} onSubmit={handleSubmit}>
            <Form.Group className="mb-3"  >
               <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                    type="text"
                    value={editForm.category}
                    name="category"
                    placeholder="Category"
                    onChange={handleChange}
                />
                 </Form.Group>
                 <Form.Group className="mb-3">
                 <Form.Label>Image URL</Form.Label>
                <Form.Control 
                    type="text"
                    value={editForm.img}
                    name="img"
                    placeholder="imageURL"
                    onChange={handleChange}
                />
                </Form.Group>
                  <Form.Group className="mb-3">
                 <Form.Label>Price</Form.Label>
                 <Form.Control 
                    type="number"
                    value={editForm.price}
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Control type="submit" value="Update Item" />
            </Form>
     
        </section>
    )
}

export default UpdateForm;