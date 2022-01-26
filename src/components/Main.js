import { Route, Switch, Redirect } from "react-router-dom"
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Category from "../pages/Category";



function Main (props) {
    console.log('main props', props)
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/profile">
                    { props.user ?
                    <Profile {...props} /> : <Redirect to="/" /> } 
                </Route>
                <Route  path="/collection">
                    <Category {...props} />
                </Route>
            </Switch>
            </main>
            )
}

export default Main;