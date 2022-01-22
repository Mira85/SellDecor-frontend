import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Cart from "../pages/Cart";


function Main (props) {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile {...props} 
                     />
                </Route>
                <Route path="/collection">
                <div className="collection">
                    <Collection {...props}/>
                </div>
                <div className="cart">
                    <Cart />
                </div>
                </Route>
            </Switch>
            </main>
            )
}

export default Main;