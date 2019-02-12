import React from 'react';

const ApprovalCard = (props) => {
    return (
        <div className="container">
            <div className="card-deck">
                {props.children}
                <div>
                <div className="btn-group">
                    <button className="btn-success">Approve</button>
                    <button className="btn-danger">Reject</button>
                </div>
                </div>
            </div>
        </div>

    )
}

export default ApprovalCard;