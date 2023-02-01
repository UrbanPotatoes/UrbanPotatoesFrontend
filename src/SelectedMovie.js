import React from 'react';
import Card from 'react-bootstrap/Card';
import Comments from './Comments/Comments';



class SelectedMovie extends React.Component {

  render() {


    return (
      <>

        <Card style={{ width: '55%' }}>
          <Card.Header>{this.props.selectedMovie.movie}</Card.Header>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${this.props.selectedMovie.poster}`} />
          <Card.Body>
            <Card.Text>
              {this.props.selectedMovie.description}
            </Card.Text>
            <Comments />
          </Card.Body>
        </Card>

      </>
    )
  }
}

export default SelectedMovie;