import React from 'react';
import faker from 'faker';

const CommentCard = (props)=> {
    let style = {
        maxWidth: '18rem'
    }
    return(
        <div className="card text-white bg-primary mb-3" style={style}>
        <div className="card-header"><img src = {props.picture} ></img>
        <h3 className="card-title">{props.author} </h3>
        </div>
        <div className="card-body">     
            
            <p className="card-text"> Today at {props.date}</p>
            <p className="card-text">{props.comment}</p>
        </div>
        </div>
    )
}

export default CommentCard;