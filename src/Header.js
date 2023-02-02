import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./header.css";
import Login from './Login';
import Logout from './Logout';
import Profileauth from './Profileauth';



class Header extends React.Component {

  render() {

    return (
      <>
        <Navbar collapseOnSelect className="navbar"expand="lg">
          <Navbar.Brand ><img className="logo" src={require('./assets/Urban-Potatoes-2-1-2023-3.gif')} alt="logo"></img></Navbar.Brand>
          <NavItem><Link to="/" onClick={this.props.resetMovies} className="nav-link"><img className="home-button"src={require('./assets/Home-2-1-2023-2.png')} alt=''></img></Link></NavItem>
          <NavItem><Link to="/about" className="nav-link"><img className="aboutus-button"src={require('./assets/About-Us-2-1-2023.png')} alt=''></img></Link></NavItem>
          <NavItem id='profile'><Link to="/profile" className="nav-link"><img className="profile-button"src={require('./assets/Profile-2-1-2023.png')} alt=''></img></Link>
          
          </NavItem>

          <Login />
          <Logout />
          <Profileauth />

        </Navbar>
      </>
    )
  }
}

export default Header;