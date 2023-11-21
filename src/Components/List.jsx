import React from "react";
import Badge from "react-bootstrap/Badge";

function List() {
  return (
    <div className="row ms-auto mx-auto container-fluid">
      <div className="col-12 col-lg-12">
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="d-flex text-center align-items-center">
              <div className="col-1">
                <img src="logo-starbucks.png" alt="" />
              </div>
              <div className="ms-2 me-auto text-start">
                <div className="fw-bold">Application Engineer</div>
                <div className="my-1">Stacksbuks Corporation</div>
                <div className="text-start">
                  <Badge bg="primary" pill>
                    Assignment Phase
                  </Badge>
                </div>
              </div>
            </div>
            <span className="badge bg-primary rounded-pill mt-4">{">"}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="d-flex">
              <div className="col-1">
                <img src="logo-starbucks.png" alt="" />
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">Application Engineer</div>
                <div className="my-1">Stacksbuks Corporation</div>
                <div className="text-start">
                  <Badge bg="primary" pill>
                    Assignment Phase
                  </Badge>
                </div>
              </div>
            </div>
            <span className="badge bg-primary rounded-pill">{">"}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="d-flex">
              <div className="col-1">
                <img src="logo-starbucks.png" alt="" />
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">Application Engineer</div>
                <div className="my-1">Stacksbuks Corporation</div>
                <div className="text-start">
                  <Badge bg="primary" pill>
                    Assignment Phase
                  </Badge>
                </div>
              </div>
            </div>
            <span className="badge bg-primary rounded-pill">{">"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
