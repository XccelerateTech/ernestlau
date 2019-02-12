import React from 'react';
import faker from 'faker';

const CommentCard = (props)=> {
    
    return (
        <div className="card" style={{backgroundColor:'rgba(30,30,30,0.1)',maxWidth:'200px'}}>
            <img className="card-img-top img-fluid" src={faker.image.avatar()} alt="avatar"/>
            <div className="card-body">
            <h3 className="card-title">{props.author}</h3>
            <div>
                <p>Today at {props.date}</p>
                <p>{props.comment}</p>
            </div>
            </div>
        </div>
    )

}
export default CommentCard;