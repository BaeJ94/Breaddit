import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
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

    reRoute = (e) =>{
        this.props.history.push(e.target.value);
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
                    <select onChange={this.reRoute.bind(this)}id="select">
                        <option value='/'>SubBreaddits</option>
                        {/*add link tags*/}
                        {this.state.subs.map(sub => {
                            const url = `/${sub.name}`;
                            // console.log('My SUBS',sub.name)
                           return  <option value={url}>{sub.name}</option>
                        })}
                    </select>
                    <Link to='/'> Home </Link>
                     - POPULAR - 
                     <Link to='/all'> ALL </Link>
                     - <Link to='/random'> Random </Link> 
                     - <Link to ='/users'> USERS </Link> | 
                     - <Link to='/askBreaddit'> AskBreaddit </Link>
                     - <Link to='/bread'> Bread </Link>
                     - <Link to='/breaddings'> Breaddings </Link>
                     - <Link to='/breadime'> Breadime </Link>
                     - <Link to='/rollvsHero'> RollvsHero </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;