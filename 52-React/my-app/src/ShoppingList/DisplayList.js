import React from 'react';

const DisplayList = (props) => {
    const listItems = props.list.map(i => 
        <li className="list-group-item">{i.item}</li>
    )

    return (
        <div>
            <h1>{props.name}'s Shopping List</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default DisplayList;