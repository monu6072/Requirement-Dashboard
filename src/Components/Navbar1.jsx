import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RxDashboard } from "react-icons/rx";
import {
  faSearch,
  faCheck,
  faBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 border-bottom mb-0 container-fluid ">
      <a className="navbar-brand ms-5  mx-auto " href="/">
        <h2 className="title text-primary ">Recruiter</h2>
        <p className="subtitle text-center " style={{ fontSize: "10px" }}>
          Your Gateway to Success!
        </p>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ms-5" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search jobs..."
                aria-label="Search jobs..."
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn  btn-outline-secondary  " type="button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
            
          </li>
          <li className="nav-item ms-5 ">
            <a className="nav-link active text-primary d-flex" href={"/"}>
              <i class="fa-thin fa-briefcase"></i>
              <div className="mx-2 ">{<RxDashboard />}</div>
              <> </>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <FontAwesomeIcon icon={faSearch} />
              <> </>
              <span>Find Jobs</span>
            </a>
          </li>
          <li className="nav-item ">
            <Link to={"/Jobapplied"}>
              <button className="nav-link active" style={{ textDecoration: 'none', color: 'gray', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faCheck} />
                <> </>
                <span>Applied Jobs</span>
              </button>
            </Link>
          </li>
        </ul>
        <>|</>
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <a className="nav-link" href="/">
              <span className="icon">
                <FontAwesomeIcon icon={faBell} />
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </a>
          </li>
        </ul>
        <>|</>
      </div>
    </nav>
  );
}

export default Navbar;
