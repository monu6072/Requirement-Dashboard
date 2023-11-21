import React from "react";
import Recruiterblog from "../Components1/Recruiterblog";
import Subscription from "../Components1/Subscription";

function Recommendedblogs() {
  return (
    <div className="row container-fluid">
      <div className="col-md-7 mx-4 mt-3">
        <h5 className=" fw-bold">
          Unlocking Success: Proven Strategies to Boost Your Chances of Landing an Application Engineer Role
        </h5>
        <p>
          <span className="text-muted">
            Dashboard {">"} Blogs {">"}
          </span>{" "}
          Unlocking Success: Pro...
        </p>
        <div className="position-relative">
        <img
          src="img1.jpeg"
          alt="/"
          className="rounded-4 img-fluid "
          style={{ height: "320px", width: "100%" }}
        />
          <div className="mt-1  bottom-0">
            <span className="nowrap fs-6 text-muted">
              Attorney, executed by the owners in favour of the seller.
              <br />
              All title documents being duly stamped and registered at the office
              of the jurisdictional sub-registrar of assurances. Khata registered
              in the name of the seller. Information on pending or past
              litigation. Availability of original title documents with the
              seller. Title documents of the property: Government order for grant,
              succession certificate, sale deed, gift deed, will, partition deed,
              etc., evidencing the transfer of title over the years, culminating
              in the vesting of property with the seller
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-3 container">
        <h5>Recommended Blogs</h5>
        <div className="row">
          <div className="col-12">
            <Recruiterblog />
          </div>
          <div className="col-12">
            <Recruiterblog />
          </div>
          <div className="col-12">
            <Recruiterblog />
          </div>
          <div className="col-12">
            <Recruiterblog />
          </div>
        </div>
        <Subscription />
      </div>
    </div>
  );
}

export default Recommendedblogs;
