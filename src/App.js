import React,{Component} from "react";
import {HashRouter as Router,Link,Route} from "react-router-dom";
import Home from "./container/home/home";
import Login from "./container/login/login";
export default class App extends Component{
    render(){
        return(
           <Router>
               <div>
                   <Route path="/" exact component={Home}></Route>
                   <Route path="/login" component={Login}></Route>
               </div>
           </Router>
        )
    }
}