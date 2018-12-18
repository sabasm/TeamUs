import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from './components/landing/Home';
import Profile from './components/Profile';
import AuthPage from './components/auth/AuthPage';
import AllPeople from './components/Swapi';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Home }/>
    <Route exact path="/auth/signup" component={AuthPage}/>
    <Route exact path="/auth/login" component={AuthPage}/>
    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/StarWars" component={AllPeople}/>
  </Switch>
)

export default Routes;