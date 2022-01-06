import React,{Component} from 'react';

import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import { IframeParent } from "./IframeParent";
import { IframeChild } from "./IframeChild";
import { WindowParent } from "./WindowParent";
import { WindowChild } from "./WindowChild";


//import Analytics from 'analytics';
//import perfumePlugin from '@analytics/perfumejs';
import ReactDOM from "react-dom"
import '../css/App.css';

import HomePage from '../pages/HomePage';

import SignIn from '../pages/SignIn';

import NavBar from './NavBar'
//import { without } from 'lodash';
import axios from 'axios';

//import Perfume from "D:/demopracticeNew/src/main/frontend/node_modules/perfume.js"
import { perfume } from "../Util.js"





class App extends Component{
constructor(props) {
    super(props);
this.toggleForm = this.toggleForm.bind(this);
this.addRegistration = this.addRegistration.bind(this);
   // perfume.start("AppAfterPaint");
 this.state = {
    newRegistration:[],
    formDisplay : true,
    token: ''};
  }

  componentDidMount() {
   this.perfume = perfume('App');
   //console.log("App  component did mount called");
  }

 componentDidUpdate() {
  //this.perfume = perfume('App');

 }




addRegistration(tempUser) {
    let newUser = this.state.newRegistration;
   // tempUser.userId = this.lastIndex;

    newUser.unshift(tempUser);
    this.setState({
    newRegistration : newUser
    });
    

  }

toggleForm(){
this.setState({
formDisplay:!this.state.formDisplay
})
}
render(){
  return (



<Router>

<div className = "App">

<div id="page-body">
<script>

</script>
<Route render= {props =>(<NavBar {...props} token = {this.state.token}/>
)} />
<Route path= "/" component = {HomePage} exact/>
<Route path= "/signin" component = {SignIn} exact/>



    <Switch>
          <Route exact path="/iframe/" component={IframeParent} />
          <Route exact path="/iframe-child/" component={IframeChild} />
          <Route exact path="/window/" component={WindowParent} />
          <Route exact path="/window-child/" component={WindowChild} />
        </Switch>

 </div>
</div>

</Router>

  );
}
}

export default App;