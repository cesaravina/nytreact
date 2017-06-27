// Dependencies

import React from "react";
import { Route, IndexRout, Router, browserHistory }

import Main from "../components/Main";

const routes = (
    <Router history = {browserHistory}>
        <Route path="/" component={Main} />
    </Router>
);

export default routes;