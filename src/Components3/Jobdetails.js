import React from "react";
import { Badge } from "react-bootstrap";

function Jobdetails() {
  return (
    <div className="container-fluid ms-auto mx-auto overflow-hidden text-wrap mb-0">
      <h4 className="text-primary fw-bold mt-2 ms-auto">Job Details</h4>
      <div className="d-flex mt-3">
        <img
          src="google_logo.png"
          style={{ height: "60px" }}
          className="bg-light rounded"
          alt="/"
        />
        <div className="container mx-3 position-relative">
          <p className="fw-bold mt-1">Project Manager</p>
          <p className="text-muted bottom-0 mb-1 position-absolute">Google</p>
        </div>
      </div>
      <div className="container mt-2 text-muted ms-auto  border-bottom">
        <div className="d-flex text-nowrap">
          <p>200 Applications</p>
          <p className="mx-3 mx-md-5">3 Vacancies</p>
          <p className="mx-3 mx-md-5 text-danger">Urgent Requirement</p>
          <p className="mx-2 mx-md-3">Apply by 23rd Jan 2023</p>
        </div>
        <p>₹5 - ₹7 Lakh/annum</p>
      </div>
      <div className="mt-2 ms-auto border-bottom">
        <h6 className="fw-bold">Experience Requirements:</h6>
        <p className="d-flex mt-3 text-muted">
          <span>Full-Time</span>
          <span className="mx-3 mx-md-5">Fresher</span>
          <span className="mx-3 mx-md-5">3-5 Yrs of Experience</span>
        </p>
      </div>
      <div className="mt-2 border-bottom">
        <h6 className="fw-bold">Working Location:</h6>
        <p className="d-flex mt-3 text-muted">
          <span>New York, USA</span>
        </p>
        <p className="d-flex text-muted">
          <span>Work from Home/Hybrid: <span className="text-primary">No</span></span>
          <span className="mx-3 mx-md-5">|</span>
          <span>Requires Traveling while working: <span className="text-primary">No</span></span>
        </p>
      </div>
      <div className="mt-2 border-bottom text-muted">
        <p>Require <span className="text-dark">Graduation</span> in <span className="text-dark">B.Tech(Civil)</span></p>
        <p>Require Skills: <span className="text-dark">Figma, UX Research, Analysis</span></p>
        <p>Assessment Phase: <span className="text-primary">Included</span></p>
      </div>
      <div className="mt-2 border-bottom text-muted ms-auto">
        <p>Benefits: <Badge bg="primary" pill>EPF</Badge> <Badge bg="primary" pill>Insurance</Badge> <Badge bg="primary" pill>ESI</Badge></p>
        <p>Perks: <Badge bg="primary" pill>Remote</Badge> <Badge bg="primary" pill>No-Bond</Badge></p>
      </div>
    </div>
  );
}

export default Jobdetails;
