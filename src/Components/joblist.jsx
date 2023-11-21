import React from "react";
import Product2 from "../Components1/Product2";
import Product1 from "../Components1/Product1";

function joblist() {
  return (
    <div className=" mx-auto container-fluid ms-auto">
      <div className="text-center d-flex col-11 mx-auto border-bottom ">
        <p className="col-6 fw-bold text-start ">Job Recomendation</p>
        <p className="col-6 text-end text-muted">view All</p>
      </div>
      <div className=" text-center mx-auto container-fluid">
      <Product2/>
      <Product1/>
      </div>
    </div>
  );
}

export default joblist;
