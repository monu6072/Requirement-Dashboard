import React from 'react'
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from 'react-router-dom';

function Product2() {
  return (
    <div className='ms-auto container-fluid mx-auto'>
    <ListGroup as='ol'>
    <div
    as="li"
    className="d-flex justify-content-between align-items-center  m-2 p-1 mb-0 "
  >
    <div className="d-flex text-start">
      <img src="win.png" alt="" className="col-1" />
      <div className=" text-start p-1">
        <div className="fw-bold">Product Designer</div>
        <span className="text-left">Webztechie</span>
        <div className="d-flex ms-auto">
          <div className='gap-1 '>
            <Badge bg="primary" pill>
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
    <Badge bg="light" pil>
      <Link className='text-decoration-none' to={'./view'}><span class="border rounded p-2 border-primary">view job Details</span></Link>
    </Badge>
  </div>
  </ListGroup>
  </div>
  )
}

export default Product2
