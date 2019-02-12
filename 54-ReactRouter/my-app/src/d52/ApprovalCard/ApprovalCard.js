import * as React from 'react';


const ApprovalCard = (props)=> {
        return (
            <div className="card">
                <div className="card-body">
                    {props.children}
                    <div className="btn-group">
                        <div className="btn-success">Accept</div>
                        <div className="btn-danger">Reject</div>
                    </div>
                </div>
            </div>
        )
};

export default ApprovalCard;
