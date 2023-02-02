import React from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import "./profile.css";


class Profile extends React.Component {

  render() {

    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" alt="this is the profile pic"/>
          <Card.Body>
            <Card.Title>USERNAME</Card.Title>
          </Card.Body>
        </Card>


        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            {/* <Col sm={4}> */}
              <ListGroup horizontal>
                <ListGroup.Item action href="#link1">
                  Favorite Movies
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Watched Movies
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                  Watch Later
                </ListGroup.Item>
              </ListGroup>
            {/* </Col> */}
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <p>Here are my favorite movies</p>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <p>Here are my watched movies</p>
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <p>Here are movies I want to watch later</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </>
    )
  }
}

export default Profile;