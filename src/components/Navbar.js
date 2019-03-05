import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

let planet = require('../redditPlanet.png');

class Navbar extends Component{
    constructor(){
        super();
        this.state ={
        subs: []
        }
    }
    componentDidMount = () =>{
    axios.get('/users/subs')
        .then((res) =>{
            this.setState({
            subs: res.data.data
            })
            console.log(this.state.subs)
        })
        .catch(err =>{
            console.log('Data not getting through')
        })
    }
    render(){
        return(
            <div id="navbar">
                <div className="NewReddit">
                    <div id="GetNewText">
                        GET NEW BREADDIT
                    </div>
                    <div>
                        <img id="planet" src={planet} alt=""/>
                    </div>
                </div>
                <div id="nav">
                    <select id="select">
                        <option>SubBreaddits</option>
                        {/*add link tags*/}
                        {this.state.subs.map(sub => {
                            const url = `/${sub.id}`;
                            // console.log('My SUBS',sub.name)
                           return  <option value={url}>{sub.name}</option>
                        })}
                    </select>
                    <Link to='/'> Home </Link>
                     - POPULAR - ALL - RANDOM - 
                    <Link to ='/users'> USERS </Link> | 
                     - WORLDNEWS
                </div>
            </div>
        )
    }
}

export default Navbar;