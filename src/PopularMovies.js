import React from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import './PopularMovies.css'


class PopularMovies extends React.Component {

  render() {

    return (
      <div className="movieSliders">
        <Carousel className='carousel'>
          {this.props.popularMovies.map(movie => {
            return (
              <Carousel.Item className='carousel.item'>
                <Link to="/selectedmovie" className="nav-link" onClick={() => { this.props.handleSelectedMovie(movie) }}>
                  <img
                    className="carousel-pictures"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}
                    alt="First slide"
                  />

                </Link>
                {/* <Carousel.Caption className='carousel-caption'>
                  <h3 style={{color: 'white'}}>{movie.description}</h3>
                </Carousel.Caption> */}
              </Carousel.Item>
            )
          }
          )}
        </Carousel>

      </div>
    );
  }
}

export default PopularMovies;