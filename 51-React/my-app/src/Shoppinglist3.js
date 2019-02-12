import * as React from 'react';
import './App.css';

class ShoppingList3 extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{color:'red'}}> {this.props.name} 's Shopping list</h1>
            </div>
        )
    }
}

export default ShoppingList3;