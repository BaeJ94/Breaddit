import React, { Component } from 'react';
import axios from 'axios';

class RollvsHero extends Component {
  constructor(){
        super();
        this.state = {
            thing: [],
            pic: []
        }
    }
  
  componentDidMount = () => {
    let sub = {id: 2};

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
        <h1>br/RollvsHero</h1>
        {this.state.thing.map(blah =>{return <div>{blah.score}<img className='breadPics' src={blah.pic} alt=''/> {blah.title}<div className='text'>{blah.text}</div><hr></hr></div> })}
      </div>
    );
  }
}

export default RollvsHero;

