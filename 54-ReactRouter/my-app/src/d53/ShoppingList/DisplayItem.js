import React from 'react';
// import {
//     Route,
//     Link,
//     match
// } from 'react-router-dom'

const DisplayItem = (props) => {
    return (
        <div>
            <h1>Item ID: {props.match.params.id}</h1>
            <h2>Item name: {props.isAuthed.toString()}</h2>
            {console.log(props)}
        </div>
    )
    
}

export default DisplayItem;