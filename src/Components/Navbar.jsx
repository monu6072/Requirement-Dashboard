import React from 'react';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import { RxDashboard } from 'react-icons/rx';
import { FaBell, FaEnvelope, FaUser, FaSearch, FaClipboardCheck } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="mx-auto container-fluid" variant="light">
      <Navbar.Brand className="text-center" href="/" style={{ marginLeft: "100px" }}>
        <h3 className="title text-primary">Recruiter</h3>
        <span className="subtitle text-center" style={{ fontSize: '10px' }}>Your Gateway to Success!</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="d-flex mx-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Nav className="mx-auto text-center fw-bold">
          <Nav.Link href="/" className="text-primary">
            <RxDashboard className="mx-2" />
            Dashboard
          </Nav.Link>
          <Nav.Link href="/">
            <FaSearch className="mx-2" />
            Find Job
          </Nav.Link>
          <Nav.Link href="/Jobapplied">
            <FaClipboardCheck className="mx-2" />
            Applied Job
          </Nav.Link>
        </Nav>
        <Nav className="mx-auto text-center">
          <Nav.Link href="#notifications" className="border-start"><FaBell /></Nav.Link>
          <Nav.Link href="#messages" className="border-end"><FaEnvelope /></Nav.Link>
          <Nav.Link href="/profile" className="mx-5">
            <img
              src="loginimg.jpeg"
              className="rounded-circle"
              alt="Profile"
              width="30"
              height="30"
            />
            <span className="mx-2">Robin</span>
            <FaUser className="mx-2" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
