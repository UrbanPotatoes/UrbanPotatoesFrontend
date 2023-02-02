import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import "./footer.css";



class Footer extends React.Component {

  render() {

    return (
      <>
      <div className='footer'>
        <Navbar className='footerId' collapseOnSelect expand="lg" >
          <Navbar.Brand>
            <p className='footer-content'>&copy; 2023 Urban Potatoes</p>
          </Navbar.Brand>
        </Navbar>
        </div>
      </>
    );
  }
}

export default Footer;