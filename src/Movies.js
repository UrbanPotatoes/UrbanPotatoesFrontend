import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Comments from './Comments/Comments';



class Movies extends React.Component {

  render() {

    return (
      <>
        {this.props.movieData.map(movie => {
          return (
            <Card style={{ width: '18rem' }}>
              <Link to="/selectedmovie" className="nav-link" onClick={() => {this.props.handleSelectedMovie(movie)}}>
                <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
              </Link>
              <Card.Body>
                <Card.Title>
                  {movie.movie}

                </Card.Title>
                <Button variant="outline-light">❤️</Button>
                <Button variant="outline-light">👀</Button>
                <Button variant="outline-light">📝</Button>
                <Comments />
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