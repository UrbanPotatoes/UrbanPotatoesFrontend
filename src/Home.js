import React from 'react';
import Movies from './Movies';
import NowPlaying from './NowPlaying';
import PopularMovies from './PopularMovies';




class Home extends React.Component {


  render() {

    return (
      <>
        <form onSubmit={this.props.getMovieData}>
          <label htmlFor=''>
            <input type='text' onInput={this.props.handleInput} />
            <button type='submit'>Search</button>
          </label>
        </form>
        
        {/* <h2>Now Playing</h2> */}

        {/* <NowPlaying 
        nowPlaying={this.props.nowPlaying}
        handleSelectedMovie={this.props.handleSelectedMovie}
        /> */}
        <h2>Popular Movies</h2>
        <PopularMovies 
        popularMovies={this.props.popularMovies}
        handleSelectedMovie={this.props.handleSelectedMovie}
        />

        <Movies 
        movieData={this.props.movieData} 
        handleSelectedMovie={this.props.handleSelectedMovie}
        />
      </>
    )
  }
}

export default Home;