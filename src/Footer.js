import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import "./footer.css";



class Footer extends React.Component {

  render() {

    return (
      <>
        <Navbar id='footerId' collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <p>&copy; 2023 Urban Potatoes</p>
          </Navbar.Brand>
        </Navbar>
      </>
    );
  }
}

export default Footer;