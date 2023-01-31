import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';



class Movies extends React.Component {

  render() {

    return (
      <>
        {this.props.movieData.map(movie => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
              <Card.Body>
                <Card.Title>
                  {movie.movie}

                </Card.Title>
                <Button variant="outline-light">❤️</Button>
                <Button variant="outline-light">👀</Button>
                <Button variant="outline-light">📝</Button>
              </Card.Body>
            </Card>
          )
        }
        )}
        
      </>
    )
  }
}

export default Movies;