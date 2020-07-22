import Login from './Login';
import React from 'react';
import ApplyEPass from './ApplyEPass';
import Home from './Home';
import {Route, Switch} from 'react-router-dom'


const Routes = () =>{
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path ="/home" component={Home}/>
                <Route path ="/applyEpass" component = {ApplyEPass}/>
            </Switch>
        </div>
  );
}


export default Routes;