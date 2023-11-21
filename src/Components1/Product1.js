import React from "react";
import Badge from "react-bootstrap/Badge";
import {ListGroup } from "react-bootstrap";
import { FaCoins } from "react-icons/fa";

function Product1() {
  return (
    <div className=" ms-auto container-fluid mx-auto">
    <ListGroup as="ol" >
      <div
        as="li"
        className="d-flex justify-content-between align-items-center border-top m-2 p-1 m-0"
      >
        <div className="d-flex text-start">
          <img src="win.png" alt="img" className="col-1 " />
          <div className=" text-start p-1">
            <div className="fw-bold">Product Designer</div>
            <span className="text-left">Webztechie</span>
            <div className="d-flex ms-auto">
              <div className="ms-auto mx-auto ">
                <Badge bg="primary"pill>
                  Remote
                </Badge>
                <Badge bg="primary" pill>
                  Full-Time
                </Badge>
                <Badge bg="primary" pill>
                  Perks
                </Badge>
                <Badge bg="primary" pill>
                  Canteen
                </Badge>
                </div>
            </div>
          </div>
        </div>
        <div className="text-nowrap text-muted text-sm">
          <p className="text-start mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <span style={{ fontSize: "13px" }}>Work From Home</span>
          </p>
          <div className="text-end">
            <FaCoins />
            <span style={{ fontSize: "13px" }}>$2-$7 LP.A.</span>
          </div>
        </div>
      </div>
    </ListGroup>
    </div>
  );
}

export default Product1;
