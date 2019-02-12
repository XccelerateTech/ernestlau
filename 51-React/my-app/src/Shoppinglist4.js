import React from 'react';
import { string } from 'prop-types';

// only for TypeScript //
// interface IMyProps {
//     name:string;
// }

// type = React.SFC<IMyProps>

const ShoppingList4 = (props) =>{
    return (
        <div>
            <h1>{props.name}'s Shopplist</h1>
            <h1>Last update at {props.date}</h1>
        </div>
    )
}

export default ShoppingList4;