import React, {Component} from 'react';
let planet = require('../redditPlanet.png');

class Navbar extends Component{
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
                        <option>Announcements</option>
                        <option>Art</option>
                        <option>AskReddit</option>
                    </select>
                    Home - POPULAR - ALL - RANDOM - USERS | ASKBREADDIT - WORLDNEWS
                </div>
            </div>
        )
    }
}

export default Navbar;