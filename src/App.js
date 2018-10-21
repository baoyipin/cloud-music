import React,{Component} from "react";
import {HashRouter as Router,Link,Route} from "react-router-dom";
import Home from "./container/home/home";
import LoginHome from "./container/login/loginHome";
import Music from "./container/music/music";
import Friends from "./container/friends/friends";
import Login from "./container/login/login";
import Registe from "./container/login/register";
export default class App extends Component{
    render(){
        return(
           <Router>
               <div>
                   <Route path="/" exact component={Home}></Route>
                   <Route path="/music" component={Music}></Route>
                   <Route path="/friends" component={Friends}></Route>
                   <Route path="/loginhome" component={LoginHome} />
                   <Route path="/login" component={Login} />
                   <Route path="/register" component={Registe} />
               </div>
           </Router>
        )
    }
}