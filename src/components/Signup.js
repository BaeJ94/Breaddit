import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Signup extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            verify: '',
            succes: ''
        }
    }

    handleUserSubmit = (e) => {
        this.setState({
          username: e.target.value
        })
        console.log(this.state.email)
    }

    handleEmailSubmit = (e) => {
        this.setState({
          email: e.target.value
        })
        
    }

    handlePassSubmit = (e) => {
        this.setState({
          password: e.target.value
        })
        console.log(this.state.email)
    }

    handleVerifySubmit = (e) => {
        this.setState({
          verify: e.target.value
        })
        
    }

    handleSubmit = () =>{
        let sub = this.state
        axios.post('/users/signup', sub)
            .then((res) =>{
                console.log(res);
                this.setState({
                    succes: res.data.message + res.data.username + '!!!'
                })
            })
            .catch(err => {
                throw err;
            })
    }

    render(){
        return(
            <div id="signupPage">
                {/*Temporary Navigation*/}
                <Link to="/">Home</Link>
                {" "}
                <Link to="/login">Login</Link>
                <h1>
                    Signup
                </h1>
                <br></br>
                <div>
                    username:
                </div>
                <div>
                    <input onChange={this.handleUserSubmit} type="text" placeholder="username" />
                </div>
                <div>
                    email:
                </div>
                <div>
                    <input onChange={this.handleEmailSubmit} type="text" placeholder="email" />
                </div>
                <div>
                    password:
                </div>
                <div>
                    <input onChange={this.handlePassSubmit} type="password" placeholder="password" />
                </div>
                <div>
                    verify:
                </div>
                <div>
                    <input onChange={this.handleVerifySubmit} type="password" placeholder="verify password" />
                </div>
                <br></br>
                <button onClick={this.handleSubmit} type="submit" >
                    Submit
                </button>
                <br></br>
                <div>
                    {this.state.succes}
                </div>
            </div>
        )
    }
}

export default Signup;