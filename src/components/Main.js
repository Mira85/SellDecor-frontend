import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import Profile from "../pages/Profile";
import Index from "../pages/Index";
import Home from "../pages/Home";

function Main(props) {
    const [item, setItem] = useState(null);

const URL ="https://selldecor-backend.herokuapp.com/item";

const getItem = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setItem(data);
}

useEffect(() => getItem(), [])

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/index">
                    <Index item={item} />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
            </main>
            )
}

export default Main;