import React from 'react';
import Movies from './Movies';
import axios from 'axios';



class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      movieData: [],
      comments: [],
      user: [],
    }
  }


  getMovieData = async (e) => {
    e.preventDefault();
    console.log('got the movies');

    try {
      let url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.movie}`
      console.log(url);

      let movieData = await axios.get(url);
      console.log(movieData.data);

      this.setState({
        movieData: movieData.data,
      });
    } catch (error) {
      console.log(error.response)

    }
  }

  getTopMovies = async () => {
    try {
      
    } catch (error) {
      console.log(error.message)
    }
  }

  handleInput = (e) => {
    this.setState({
      movie: e.target.value
    })
  }

  // componentDidMount() {
  //   this.getMovieData();
  // }

  render() {

    return (
      <>
        <form onSubmit={this.getMovieData}>
          <label htmlFor=''>
            <input type='text' onInput={this.handleInput} />
            <button type='submit'>Search</button>
          </label>
        </form>
        
        <h1>This is the home page</h1>
        <Movies movieData={this.state.movieData} />
      </>
    )
  }
}

export default Home;