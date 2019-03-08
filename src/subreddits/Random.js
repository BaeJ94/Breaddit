import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

class Random extends Component{
    constructor(){
        super();
        this.state ={
        num: 0
        }
    }
    
    handleOnClick = () => {
        var num = Math.ceil(Math.random() * 5);
        
        this.setState({
            num: num
        })
        if(num === 1){
            this.props.history.push("/askBreaddit");
        }else if(this.state.num === 2){
            this.props.history.push("/bread");
        }else if(this.state.num === 3){
            this.props.history.push("/breaddime")
        }else if(this.state.num === 4){
            this.props.history.push("/breaddings")
        }else if(this.state.num === 5){
            this.props.history.push("/rollvsHero")
        }
        console.log(this.state)
        debugger;
    }
    render(){
        return(
            <div>
                <h1>Random</h1>
                {this.handleOnClick}
            </div>
        )
    }
}

export default Random;