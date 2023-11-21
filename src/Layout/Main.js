import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Components/Navbar';

function Main() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="text-top">
        <NavigationBar />
      </div>
      <Container fluid className="flex-grow-1">
        <Outlet />
      </Container>
      <div className="text-bottom">
        <Footer />
      </div>
    </div>
  );
}

export default Main;

