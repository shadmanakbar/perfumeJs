import React, { Component, useState} from 'react'
import './CSS/todo.css'
import '../css/App.css';
import Analytics from 'analytics';
import perfumePlugin from '@analytics/perfumejs';

import { useHistory  } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';
import {
BrowserRouter as Router,
Route,
} from 'react-router-dom';
import HomePage from '../pages/HomePage'

import NavBar from './NavBar'

import { perfume } from "../Util.js"

class SigninForm extends Component {
constructor(props) {
    super(props);

this.state = {
   username:'',
   password:'',
   isAuthenticated:false,
   resData :'',
   token :'',


};



this.handleChange = this.handleChange.bind(this);
this.handleAdduser = this.handleAdduser.bind(this);
}

componentDidMount() {


   this.perfume = perfume('SignIn');


  }


  componentDidUpdate() {

    this.perfume = perfume('SignIn');


    }



handleAdduser(e) {
  e.preventDefault();




  this.setState({

    username : '',
    password : ''

  });

  this.setState({
    isAuthenticated:true,
    resData: this.state.username

  });


  
                        }



handleChange (e) {
const target = e.target;
const value = target.value;
const name =target.name;

this.setState({
[name] : value

});

}







    render() {


    if(!this.state.isAuthenticated)
    {
        return (







             <div
                    className={
                      'card textcenter mt-3 ' +
                      (true)
                    }
                  >
                    <div
                      className="apt-addheading card-header bg-dark text-white"

                    >
                     Log In
                    </div>

                    <div className="card-body">
                      <form id="aptForm" noValidate
                      onSubmit ={this.handleAdduser} >




                        <div className="form-group form-row">
                          <label
                            className="col-md-2 col-form-label text-md-right "
                            htmlFor="username"
                          >
                            Username
                          </label>
                          <div className="col-md-10">
                            <input
                              type="text"
                              className="form-control "
                              name="username"
                              id="username"
                              placeholder="username"
                              value={this.state.username}
                              onChange={this.handleChange}
                            />
                          </div>
                          <label
                            className="col-md-2 col-form-label text-md-right"
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <div className="col-md-10">
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              id="password"
                               placeholder="password"
                               value={this.state.password}
                                onChange={this.handleChange}
                            />
                          </div>

                        </div>

                        <div className="form-group form-row mb-0">
                          <div className="offset-md-1 col-md-2">
                            <button
                              type="submit"
                              className="btn btn-dark d-block ml-auto"
                            >
                              Submit
                            </button>
                            
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>




        )
        

        }

        else {
        return(
        <div>
      <Route render= {props =>(<NavBar {...props} token = {this.state.token}/>
      )} />
        <HomePage user = {this.state.resData}/>

        </div>

        )
        }
    }
}

export default SigninForm