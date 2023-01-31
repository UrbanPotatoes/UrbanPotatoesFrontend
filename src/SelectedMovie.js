import React from 'react';
import Card from 'react-bootstrap/Card';


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
          </Card.Body>
        </Card>



        {/* <h1>{this.props.selectedMovie.movie}</h1>
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.selectedMovie.poster}`} alt={this.props.selectedMovie.movie} />
        <p>{this.props.selectedMovie.description}</p> */}

      </>
    )
  }
}

export default SelectedMovie;