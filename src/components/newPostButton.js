import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class newPostButton extends Component{
    constructor(){
        super();
        this.state ={

        }
    }
    render(){
        return (
            <div>
                <button><Link to ='/newPost'>Create New Post</Link></button>
            </div>
        )
    }
}

export default newPostButton;