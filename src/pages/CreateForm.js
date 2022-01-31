import "./Form.scss";
import Form from "react-bootstrap/Form";
import {useState} from "react";

function CreateForm (props) {

//state to hold formdata
const [newForm, setForm] = useState({
    name:"",
    category: "",
    img:"",
    price:"",
})

//handleChange
const handleChange = (evt)=> {
    setForm((prevState) => ({
        ...prevState, [evt.target.name]:evt.target.value})
    )
}

//handlesubmit
const handleSubmit = (evt) => {
    evt.preventDefault()
    props.createItem(newForm)
    setForm({
        name:"",
        category: "",
        img:"",
        price:"",
    })
} 




    return (
        <section>
            <Form style={{marginTop: "1rem"}} onSubmit={handleSubmit}>
            <Form.Group className={["mb-3", "formLabels"]} >
                <Form.Label>Name</Form.Label>
                <Form.Control size="sm"
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Group className={["mb-3", "formLabels"]} >
                <Form.Label >Category</Form.Label>
                <Form.Control size="sm"
                    type="text"
                    value={newForm.category}
                    name="category"
                    placeholder="Category"
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Group className={["mb-3", "formLabels"]} >
                <Form.Label>Image URL</Form.Label>
                <Form.Control size="sm"
                    type="text"
                    value={newForm.img}
                    name="img"
                    placeholder="imageURL"
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Group className={["mb-3", "formLabels"]} >
                <Form.Label>Price</Form.Label>
                 <Form.Control size="sm"
                    type="number"
                    value={newForm.price}
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Control className="submitBtn" style={{marginTop: "1rem"}} variant="outline-primary" type="submit" value="Add Item" />
            </Form>
     
        </section>
    )
}

export default CreateForm;