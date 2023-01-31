import React from 'react';
import { Card } from 'react-bootstrap';



class Movies extends React.Component {

  render() {

    return (
      <>
        {this.props.movieData.map(movie => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <Card.Body>
                <Card.Title>
                  {movie.original_title}

                </Card.Title>
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