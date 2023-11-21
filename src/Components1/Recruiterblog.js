import React from "react";

function Recruiterblog() {
  return (
    <div className="mt-2 container ms-auto text-dark">
      <div className="d-flex border rounded overflow-hidden">
        <img
          src="img1.jpeg"
          alt="/"
          style={{ width: "120px", height: "70px" }}
          className="img-fluid rounded"
        />
        <div className="ms-auto flex-grow-1">
          <p className="fw-bold mx-1 mt-1 mb-0" style={{ fontSize: "13px" }}>
            Unlocking Success: Proven Strategies to Boost Your Chances of Landing an App
          </p>
          <span className="text-muted mx-1 d-block mb-1">4 days ago</span>
        </div>
      </div>
    </div>
  );
}

export default Recruiterblog;

