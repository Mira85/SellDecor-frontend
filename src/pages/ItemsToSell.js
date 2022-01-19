import { useState } from "react";

function ItemsToSell(props) {
    console.log("sell", props.createItemFunc.createitem)
    //state to hold formData
    const [form, setForm] = useState({
        name: "",
        category: "",
        img: "",
        price: "",
    })

    // handleChange function for form
    const handleChange = (event) => {
        setForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form data', form)
        props.createItemFunc.createItem(form);
        setForm({
            name: "",
            category: "",
            img: "",
            price: "",
        })
    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={form.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input type="text"
                    value={form.category}
                    name="category"
                    placeholder="category"
                    onChange={handleChange}
                />
                <input type="text"
                    value={form.img}
                    name="img"
                    placeholder="image"
                    onChange={handleChange}
                />
                <input type="number"
                    value={form.price}
                    name="price"
                    placeholder="price"
                    onChange={handleChange}
                />
                <input type="submit"
                    value='Create item' />

            </form>
        </section>
    )
}

export default ItemsToSell;