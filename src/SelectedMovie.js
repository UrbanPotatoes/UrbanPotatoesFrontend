import React from 'react';
import Card from 'react-bootstrap/Card';
import Comments from './Comments/Comments';



class SelectedMovie extends React.Component {

  render() {


    return (
      <>

        <Card style={{ width: '55%' }}>
          <Card.Header>{this.props.movieDataFromDB.title}</Card.Header>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${this.props.movieDataFromDB.poster}`} />
          <Card.Body>
            <Card.Text>
              {this.props.movieDataFromDB.description}
            </Card.Text>

            <Comments 
            movieDataFromDB={this.props.movieDataFromDB}
            />

          </Card.Body>
        </Card>

      </>
    )
  }
}

export default SelectedMovie;