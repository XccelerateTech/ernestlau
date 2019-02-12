import React from 'react';
import ReactDOM from 'react-dom';

class CurrencyConvertor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hkd: null,
            usd: null,
        }
    }

    handleChange = (e) => {
        const name = e.target.name; 
        if (name=="hkd") {
            this.setState(
                {
                    hkd: e.target.value,
                    usd: (e.target.value * 0.13),
                }
            )
        }
        if (name=="usd") {
            this.setState(
                {
                    usd: e.target.value,
                    hkd: (e.target.value * 7.82),
                }
            )
        }
      
    }
    render() {
        return(         
            <div className="ui card">
                <label>Enter hkd</label>
                <input type="text" name = "hkd" value = {this.state.hkd} onChange={this.handleChange} ></input>     
                <label>Enter usd</label>
                <input type="text" name = "usd" value = {this.state.usd} onChange={this.handleChange} ></input>                          
            </div>
        )
    } 
}
export default CurrencyConvertor;
//ReactDOM.render(<CurrencyConvertor />, document.getElementById('root'));


