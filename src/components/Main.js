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
}

const createItem = async(item) => {
    console.log("itemtosell", item)
    item.price = 100.0;
    await fetch(URL, {
       method: "POST",
       headers: {
           "Content-Type": "Application/json",
       },
       body: JSON.stringify(item),
    });
    //getItem();
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
                    <Profile createItem={createItem}/>
                </Route>
            </Switch>
            </main>
            )
}

export default Main;