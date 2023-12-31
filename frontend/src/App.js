import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import Users from "./user/pages/Users.js";
import NewPlace from "./places/pages/js/NewPlace";
import MainNavigation from "./shared/components/Navigation/js/MainNavigation";
import UserPlaces from "./places/pages/js/UserPlaces";

const App = () => {
    return <Router>
        <MainNavigation/>
        <main>
            <Switch>
                <Route path="/" exact>
                    <Users/>
                </Route>
                <Route path="/:userId/places" exact>
                    <UserPlaces />
                </Route>
                <Route path="/places/new" exact>
                    <NewPlace />
                </Route>
                <Redirect to="/"/>
            </Switch>
        </main>
    </Router>;
}

export default App;
