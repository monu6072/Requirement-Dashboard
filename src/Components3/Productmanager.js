import React from "react";
import Jobdetails from "./Jobdetails";
import { Badge } from "react-bootstrap";

function Productmanager() {
    return (
        <div className="container-fluid ms-auto mx-auto">
            <div className="row justify-content-center">
            <div className="col-md-11 mx-3 mt-3 ms-auto ">
                <p>
                    <span className=" text-muted">Recommended jobs {">"}</span>Project
                    Manager
                </p>
                <div className=" border rounded-4 ">
                    <div className="row">
                    <div className="col-md-4 ">
                        <div className=" text-center mt-2">
                            <h4>Buy Subcription Plan to Apply</h4>

                            <div
                                style={{ backgroundColor: "lightyellow" }}
                                className=" container  ms-auto  text-center border rounded-4 border-warning mt-4 m-3 p-4  "
                            >
                                <img src={"sites1.jpeg"} style={{ width: "180px", height: '120px' }} alt="/"/>
                                <p className="fw-bold mt-1">
                                    <small>
                                        Get a Chance to Apply Jobs which asking Experience
                                    </small>
                                </p>
                                <small className="text-muted  ">
                                    Using our Gold subscription package, one can also Apply to{" "}
                                    <br />
                                    the jobs which asking Experienced Candidates.
                                </small>
                            </div>
                        </div>

                        <div>
                            <p className="fw-bold mx-3 ">Plan Details</p>
                            <div className="container-fluid ms-auto mx-auto text-start mx-3 border-warning border rounded-3 p-2">
                                <p className="fw-bold">Recruitr Gold Candidate</p>
                                <p className="text-primary fw-bold">
                                    ₹200 <small className="text-muted mx-1 fw-normal">₹400</small>
                                    <Badge bg="primary" pill >50% OFF</Badge>
                                </p>
                                <small className="text-warning">
                                    3 Months Plan | Only Fresher Candidates job...
                                </small>
                            </div>
                            <p className="text-center ms-auto mx-auto bg-dark text-light rounded-3 p-2 m-5">
                                Buy Plan Now
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8 container ms-auto mx-auto">
                        <Jobdetails />
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Productmanager;
