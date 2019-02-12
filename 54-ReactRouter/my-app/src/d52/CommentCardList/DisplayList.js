import React from 'react';

const DisplayList = (props)=> {
    const listItems = props.list.map(l=>
        <li className="list-group-item" key={l.id}>{l.item}</li>)

    return(
        <div>
            <h1> {props.name}'s List</h1>
            <ul className="list-group">
                {listItems}
            </ul>
        </div>
    )
}

export default DisplayList;