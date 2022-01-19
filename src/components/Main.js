import { Route, Switch } from "react-router-dom"
import Profile from "../pages/Profile";
import Index from "../pages/Index";
import Home from "../pages/Home";

function Main(props) {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/index">
                    <Index />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
            </main>
            )
}

export default Main;