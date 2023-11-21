import React from "react";
import List from "./List";
import Application from "./Application";

function Head() {
    return (
        <div className="row container-fluid mb-3">
            <h3 className="fw-bold mx-3">Dashboard</h3>
            <div className="row ">
                <div className="col-md-6 ">
                    <div className="d-flex mx-4">
                        <h5 className="fw-bolder col-6 text-start">Applied Jobs</h5>
                        <a
                            href="/"
                            className="text-muted col-6 text-end text-decoration-none"
                        >
                            View all
                        </a>
                    </div>
                    <List />
                </div>
                <div className="col-md-5 mx-3 ">
                    <div className=" text-start h5 ">Application Stats</div>
                    <Application />
                </div>
            </div>
        </div>
    );
}

export default Head;
