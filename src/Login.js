import React, {SyntheticEvent, Component}  from 'react';
import ApiCalendar from 'react-google-calendar-api';
import App from '../src/App.js';
import { Redirect } from 'react-router-dom';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email1: "",
            email2: "",
            user : null,
            error: "ALL OK"
        }

    }

    isValidInput(){
        return true;
    }

    tryLogin(){
        return fetch("http://localhost:9000/login?email1=" +this.state.email1+"&email2="+this.state.email2)
            .then(res => res.text())
            .then(res => this.setState({error:JSON.parse(res).error,user:JSON.parse(res).result}))
            .then(res => this.state.user != null)
            .catch(err => err);
    }

    async handleSubmit(event){
        event.preventDefault()
        if(this.isValidInput()){
            var isLoggedin = await this.tryLogin()
            if(isLoggedin){
                console.log(this.state.user)
                localStorage.setItem('user',JSON.stringify({email1:this.state.user.email1,email2:this.state.user.email2,token:null}))
                this.props.onLogin({email1:this.state.user.email1,email2:this.state.user.email2,token:null})
            }
        }

    }

handleInputChange(event){
    this.setState({
        [event.target.name]: event.target.value
    })
}

render(): ReactNode{

        return (

            <div>
                <h1>  Please Enter In Your Email and the Email of The Person You Want to Meet With:</h1>

            <form onSubmit={this.handleSubmit}>
                <label>
                    Your Email
                    <input type="email" name = "email1" value={this.state.email1} onChange={this.handleInputChange}/>
                </label>
                <label>
                    Their Email
                    <input type = "email" name = "email2" value ={this.state.email2} onChange={this.handleInputChange}/>
                </label>
                <input type="submit" value="Submit" onClick = {this.handleSubmit}/>
            </form>
            </div>

       );
   }
}

export default Login;