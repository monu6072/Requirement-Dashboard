import React from "react";
import { Badge } from "react-bootstrap";


function Subscription() {
  return (
    <div className="container ms-auto mx-auto overflow-hidden">
      <h5 className="fw-bolder">Recommended Subscription Plan</h5>
      <small className="text-muted ms-auto">
        Hey Robin,we would to like Recommended you a plan so that<br/>
        you also get on the way of success...
      </small>
      <div className=" ms-auto border border-primary rounded-4 mt-3 container">
        <div className="m-2 p-2">
          <span className="fw-bolder">Recruitr Fresher Candidate</span>
          <div className="mt-2 ">
            <span className="fw-bold text-primary">Free</span>
            <span className="text-muted m-2 ">$200</span>
            <Badge bg="primary" pill>Coupan Applied</Badge>
          </div>
          <div className="mt-2 fw-bold" style={{fontSize:'13px'}}>
          <span className=" text-primary ">
            3 Months Plan | Only Freshers Candidate | Unlimited job Applying...
          </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
