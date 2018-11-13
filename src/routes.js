import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';

const routes = (
    <Switch>
        <Route exact path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/' component={Landing}/>
    </Switch>
)

export default routes;