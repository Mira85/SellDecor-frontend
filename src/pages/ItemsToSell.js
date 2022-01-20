import { useState } from "react";

function ItemsToSell(props) {
    console.log("itemsto sell props", props)
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
        console.log('handle submit')
        event.preventDefault();
        props.createItem(form);
        setForm({
            name: "",
            category: "",
            img: "",
            price: "",
        })
    }

    const loaded = () => {
        return (
            <div>

       
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
                    {props.items.map((item, index) => {
                        const { name, category, img, price } = item;
                        return (

                            <tr className="tb-row">

                                <td>{name}</td>
                                <td>{category}</td>
                                <td><img src={img} alt={name} /></td>
                                <td>{price}</td>
                                <td><button>Update</button><button>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </div>
     )

    };

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <form style={{ marginTop: '5rem' }} onSubmit={handleSubmit}>
                <input type="text"
                    value={form.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <br />
                <input type="text"
                    value={form.category}
                    name="category"
                    placeholder="category"
                    onChange={handleChange}
                />
                <br />
                <input type="text"
                    value={form.img}
                    name="img"
                    placeholder="image"
                    onChange={handleChange}
                />
                <br />
                <input type="number"
                    value={form.price}
                    name="price"
                    placeholder="price"
                    onChange={handleChange}
                />
                <br />
                <input type="submit"
                    value='Create item' />

            </form>
          
            
        {props.items ? loaded() : loading }



        </section>
    )
}

export default ItemsToSell;