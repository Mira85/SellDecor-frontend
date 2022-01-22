import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Category from "../pages/Category";



function Main (props) {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile {...props} />
                </Route>
                <Route path="/collection">
                    <Category {...props} />
                </Route>
            </Switch>
            </main>
            )
}

export default Main;