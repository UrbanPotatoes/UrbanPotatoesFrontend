import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./header.css";



class Header extends React.Component {

  render() {

    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand ><img className="logo" src={require('./assets/Urban-Potatoes-2-1-2023-3.gif')} alt="logo"></img></Navbar.Brand>
          <NavItem><Link to="/" onClick={this.props.resetMovies} className="nav-link">Home</Link></NavItem>
          <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
          <NavItem id='profile'><Link to="/profile" className="nav-link">Profile</Link></NavItem>
        </Navbar>
      </>
    )
  }
}

export default Header;