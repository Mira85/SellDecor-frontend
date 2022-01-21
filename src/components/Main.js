import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import Profile from "../pages/Profile";
import Index from "../pages/Index";
import Home from "../pages/Home";
import CreateForm from "../pages/CreateForm";
import UpdateForm from "../pages/UpdateForm";

function Main (props) {
    const [items, setItems] = useState({
        itemsData :[],
        eachItem:[],
        value: true
    });


    const URL ="http://localhost:3001/item/";
//const URL ="https://selldecor-backend.herokuapp.com/item";

const getItems = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setItems({
        itemsData : data,
        eachItem:[],
        value: true
    });
    console.log('itemstate', items)
}

const createItem = async(createdItem) => {
    //conversion of price(string) to number
    createdItem.price = parseInt(createdItem.price);
    console.log("itemtosell", createdItem.price)
    await fetch(URL, {
       method: "POST",
       headers: {
           "Content-Type": "Application/json",
       },
       body: JSON.stringify(createdItem),
    });
    getItems();
}

const updateItem = async(item) => {
    await fetch(URL + item._id, {
        method: "PUT",
        headers: {
            "content-Type": "Application/json"
        },
        body: JSON.stringify(item)
    });
    getItems();
}

const handleUpdate = (itm) => {
    console.log('clicked')
    const updateItem = {...items, eachItem:itm, value:!items.value};
    setItems(updateItem);
}

useEffect(() => getItems(), [])

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/index">
                    <Index {...items} />
                </Route>
                <Route path="/profile">
                    <Profile {...items} 
                    createItem={createItem} 
                    updateItem={updateItem}
                    handleUpdate={handleUpdate} />
                </Route>
            </Switch>
            </main>
            )
}

export default Main;