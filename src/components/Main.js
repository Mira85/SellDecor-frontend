import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import Profile from "../pages/Profile";
import Index from "../pages/Index";
import Home from "../pages/Home";

function Main (props) {
    const [item, setItem] = useState(null);


    const URL ="http://localhost:3001/item";
//const URL ="https://selldecor-backend.herokuapp.com/item";

const getItem = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setItem(data);
    console.log('itemstate', item)
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
    getItem();
}

useEffect(() => getItem(), [])

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/index">
                    <Index items={item} />
                </Route>
                <Route path="/profile">
                    <Profile items={item} createItem={createItem} />
                </Route>
            </Switch>
            </main>
            )
}

export default Main;