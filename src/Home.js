import React from 'react';
import Movies from './Movies';




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
        
        <h1>This is the home page</h1>
        <Movies 
        movieData={this.props.movieData} 
        handleSelectedMovie={this.props.handleSelectedMovie}
        />
      </>
    )
  }
}

export default Home;