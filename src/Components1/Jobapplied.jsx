import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Subscription from "./Subscription";
import Recruiterblog from "./Recruiterblog";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { IoIosArrowDown } from 'react-icons/io';

function Jobapplied() {
  return (
    <div className="row container-fluid mb-auto">
      <h3 className=" fw-bold">Dashboard</h3>
      <div className="col-md-7  float-left">
        <div className="row">
          <div className="col-6">
            <h5 className="fw-bolder">Explore Jobs</h5>
          </div>
          <div className="col-6 text-end ">
            <a href="/" className="text-muted text-decoration-none">View all</a>
          </div>
        </div>
        <div className="text-muted text-xs gap-2  p-1">
        <Badge className="bg-light rounded-2 border text-muted">
          Industry of field Interest
          <IoIosArrowDown/>
        </Badge>
        <Badge className="bg-light rounded-2 border text-muted">
          Experience Status
          <IoIosArrowDown/>
        </Badge>
        <Badge className="bg-light rounded-2 border text-muted">Skills</Badge>
        <Badge className="bg-light rounded-2 border text-muted">
          Employement Type
          <IoIosArrowDown/>
        </Badge>
        <Badge className="bg-light rounded-2 border text-muted">Location <IoIosArrowDown/></Badge>
        <Badge className="bg-light rounded-2 border text-muted">Salary <IoIosArrowDown/></Badge>
        </div>
        <div>
          <ListGroup as="ol" className="border rounded ">
            <Product2 />
            <Product1 />
            <Product1 />
            <Product1 />
            <Product1 />
          </ListGroup>
        </div>
      </div>
      <div className="col-md-4 float-right">
        <Subscription />
        <div className="mt-3">
          <h5 className="fw-bold">Recruitr Blogs</h5>
          <Link className="text-decoration-none" to={"/Blog"}>
            <Recruiterblog />
            <Recruiterblog />
            <Recruiterblog />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Jobapplied;
