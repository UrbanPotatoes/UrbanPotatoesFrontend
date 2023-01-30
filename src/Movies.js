
import React from 'react';
import { Card } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button'



class Movies extends React.Component {






  render() {

    return (
      <>
        {this.props.movies.map(movie => {
          return(
          <Card style={{ width: '18rem' }}>
            <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <Card.Body>
        
              <Card.Title>
                {movie.original_title}
                
              </Card.Title>
            </Card.Body>


          </Card>
        )}
        )};
        :
        <h3>No Movies found</h3>
      </>
    )
  }
}

export default Movies;