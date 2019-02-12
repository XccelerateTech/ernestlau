import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom'

const DisplayList = (props)=> {
    const listItems = props.list.map(l=>
        <div className="item" key={l.id}>
        <span><Link to={'/DisplayItem/' + l.id}>{l.item}</Link></span>
        </div>)

    return(
        <div>
            <h1> {props.name}'s Shopping List</h1>
            <div className="ui celled list">
                {listItems}
            </div>
        </div>
    )
}

export default DisplayList;