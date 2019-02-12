
import ApprovalCard from './ApprovalCard'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CommentCard from './CommentCard'
import faker from 'faker';


const ApprovalApp = () => {
    return (
        <div className="container">
        <h2>Xccelerate Cards</h2>
            <ApprovalCard>
                <div>
                    <h4>Alert</h4>
                    Is this something you really want?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentCard author="Sam" date="Today at 3:45 PM" comment="Wow I can see clearly now"  picture={faker.image.avatar()} /></ApprovalCard>
            <ApprovalCard>
                <CommentCard author="Alex" date="Today at 8:00 PM" comment="Wow I couldn't write this in 20 years" picture={faker.image.avatar()} /> </ApprovalCard>
            <ApprovalCard>
                <CommentCard author="Jane" date="Yesterday at 11:45 AM" comment="Wow what a great blog" picture={faker.image.avatar()} /></ApprovalCard>
                <h5>Xccelerate 2018 ©</h5>
        </div>
    );
};

export default ApprovalApp;
