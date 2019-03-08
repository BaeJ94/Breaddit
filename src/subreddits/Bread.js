import React, { Component } from 'react';
import axios from 'axios';

class Bread extends Component {
  constructor(){
        super();
        this.state = {
            thing: [],
            pic: []
        }
    }
  
  componentDidMount = () => {
    let sub = {id: 1};

    axios.post('/users/bread', sub)
      .then((res) =>{
        this.setState({
          thing: res.data.data
        })
      })
      .then(() =>{
        console.log(this.state.pic);
      })
      .catch(err => {
        throw err;
      })
  }

  render() {
    
    return (
      <div>
        <h1>Bread Page</h1>
        {this.state.thing.map(blah =>{return <div><button>up</button>{blah.score}<img className='breadPics' src={blah.pic} alt=''/> {blah.title}</div> })}
      </div>
    );
  }
}

export default Bread;