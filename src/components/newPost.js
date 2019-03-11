import React, {Component} from 'react';

class NewPost extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div id='newPost'>
                <h1>Create New Post</h1>
                <div>
                    Title:
                </div>
                <input type='text'/>
                <br></br>
                <div>
                    Text:
                </div>
                <input/>
                <br></br>
                <div>
                    Url:
                </div>
                <input/>
                <br></br>
                <div>
                    Subbreaddit Name:
                </div>
                <input/>
                <br></br>
                <button>Submit</button>
            </div>
        )
    }
}

export default NewPost;