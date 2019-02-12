import React from 'react';
import faker from 'faker';

interface ImyProps {
    author: string;
    date: string;
    comment: string;
    childen?: JSX.Element[] | JSX.Element
}

// ? means optional

const CommentCard: React.SFC<ImyProps> = (props: any)=> {
    
    return (
        <div className="card col-3" style={{backgroundColor:'rgba(30,30,30,0.8)'}}>
            <img className="card-img-top img-fluid" src={faker.image.avatar()} />
            <div className="card-body">
            <h3>{props.author}</h3>
            <div>
                <p>Today at {props.date}</p>
                <p>{props.comment}</p>
            </div>
            </div>
        </div>
    )

}
export default CommentCard;