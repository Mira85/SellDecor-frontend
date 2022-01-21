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
            <form style={{marginTop: "5rem"}} onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={newForm.category}
                    name="category"
                    placeholder="Category"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={newForm.img}
                    name="img"
                    placeholder="imageURL"
                    onChange={handleChange}
                />
                 <input 
                    type="number"
                    value={newForm.price}
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Item" />
            </form>
     
        </section>
    )
}

export default CreateForm;