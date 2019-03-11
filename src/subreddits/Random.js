import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

class Random extends Component{
    
    componentDidMount = () => {
        var num = Math.ceil(Math.random() * 5);

        if(num === 1){
            this.props.history.push("/askBreaddit");
        }else if(num === 2){
            this.props.history.push("/bread");
        }else if(num === 3){
            this.props.history.push("/breadime")
        }else if(num === 4){
            this.props.history.push("/breaddings")
        }else if(num === 5){
            this.props.history.push("/rollvsHero")
        }
        

    }
    render(){
        return(
            <div>
            </div>
        )
    }
}

export default Random;