import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

function Header(){
    var headerStyle = {
        backgroundColor: 'burlywood',
    }
    return (
        <Navbar style={headerStyle} expand="lg">
  <Navbar.Brand href="/">KegTracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#aboutus">About Us</Nav.Link>
      <Nav.Link href="#allkegs">AllKegs</Nav.Link>
      <Nav.Link href="#newkeg">New Keg</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}
export default Header;