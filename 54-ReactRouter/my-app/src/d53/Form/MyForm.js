import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
        }
    }
    handleChange(e) {
        this.setState(
            {
                name: e.target.value,
            }
        )
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    render() {
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" onChange={(e)=>this.handleChange(e)}></input>
                    <button>Submit</button>
                </form>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default MyForm;

