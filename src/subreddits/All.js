import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class All extends Component{
    constructor(){
        super();
        this.state = {
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

    reRouteTwo = (e) =>{
        this.props.history.push(e.target.value);
    }
    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <br></br>
                <ul onclick={this.reRouteTwo} >
                    {this.state.subs.map(subbreaddit =>{
                        const url = `/${subbreaddit.name}`
                        return <Link to={url}><li value={url} className='allSubs'>br/{subbreaddit.name}</li></Link>
                    })}
                </ul>
            </div>
        )
    }
}
export default All;

