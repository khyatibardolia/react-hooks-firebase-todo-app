import React, {Fragment} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import * as routes from '../constants/routes';
import Login from "../components/login/Login";
import AddTodos from "../components/todos/add-todos/AddTodos";

function Routing() {
    return (
        <Fragment>
            <BrowserRouter>
                <Route exact path={routes.LOGIN} component={Login}/>
                <Route exact path={routes.ADDTODOS} component={AddTodos}/>
            </BrowserRouter>
        </Fragment>
    );
}

export default Routing;