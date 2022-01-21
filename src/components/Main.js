import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import Profile from "../pages/Profile";
import Index from "../pages/Index";
import Home from "../pages/Home";

function Main (props) {
    const [items, setItems] = useState({
        itemData : [],
        eachItem:[],
        value: true
    });


    const URL ="http://localhost:3001/item/";
//const URL ="https://selldecor-backend.herokuapp.com/item";

const getItems = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setItems({
        itemData : [],
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

const updateItem = async(item, id) => {
    await fetch(URL + id, {
        method: "PUT",
        headers: {
            "content-Type": "Application/json"
        },
        body: JSON.stringify(item)
    });
    getItems();
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
                    <Profile {...items} createItem={createItem} updateItem={updateItem} />
                </Route>
            </Switch>
            </main>
            )
}

export default Main;