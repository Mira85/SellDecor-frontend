import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import Profile from "../pages/Profile";
import Index from "../pages/Index";
import Home from "../pages/Home";
import Collection from "../pages/Collection";


function Main (props) {
  





    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/index">
                    <Index {...props} />
                </Route>
                <Route path="/profile">
                    <Profile {...props} 
                     />
                </Route>
                <Route path="/collection">
                    <Collection {...props} />
                </Route>
            </Switch>
            </main>
            )
}

export default Main;