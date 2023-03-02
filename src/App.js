import './App.css';
import React, {Component}  from 'react';
import Login from '../src/Login.js';
import HomePage from '../src/HomePage.js';
import ApiCalendar from 'react-google-calendar-api';
import CalendarPage from '../src/CalendarPage.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link } from "react-router-dom";

import http from '../src/utils/http.js';




class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {userInfo:JSON.parse(localStorage.getItem('user'))};

    }

    render(): React.Node {
        return (

            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/HomePage">Home</Link>
                        </li>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        <li>
                            <Link to="/CalendarPage">Calendar</Link>
                        </li>
                    </ul>

                <hr/>

                    <Switch>
                        <Route path="/HomePage">
                            <HomePage user= {this.state.userInfo} />
                        </Route>
                        <Route path="/Login">
                            <Login user={this.state.userInfo} onLogin={(user)=>{this.setState({userInfo:user})}}/>
                        </Route>
                        <Route path="/CalendarPage">
                            <CalendarPage user={this.state.userInfo}  />
                        </Route>
                    </Switch>
                </div>
            </Router>

        );

    }


}

export default App;
