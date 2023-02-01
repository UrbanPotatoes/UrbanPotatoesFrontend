import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Home from './Home';
import Profile from './Profile';
import SelectedMovie from './SelectedMovie';
import axios from 'axios';



class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      movieData: [],
      comments: [],
      user: [],
      nowPlaying: [],
      popularMovies: [],
      selectedMovie: {}
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

  getNowPlaying = async () => {
    console.log('got the movies');

    try {
      let url = `${process.env.REACT_APP_SERVER}/getNow`
      console.log(url);

      let movieData = await axios.get(url);
      console.log(movieData.data);

      this.setState({
        nowPlaying: movieData.data,
      });
    } catch (error) {
      console.log(error.response)

    }
  }

  getPopularMovies = async () => {
    console.log('got the movies');

    try {
      let url = `${process.env.REACT_APP_SERVER}/getPopular`
      console.log(url);

      let movieData = await axios.get(url);
      console.log(movieData.data);

      this.setState({
        popularMovies: movieData.data,
      });
    } catch (error) {
      console.log(error.response)

    }
  }

  handleSelectedMovie = (movie) => {

    this.setState({
      selectedMovie: movie
    })

  }

  handleInput = (e) => {
    this.setState({
      movie: e.target.value
    })
  }

  componentDidMount() {
    this.getNowPlaying();
    this.getPopularMovies();
  }


  render() {
    return (
      <>

        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={<Home 
              getMovieData={this.getMovieData}
              handleInput={this.handleInput}
              handleSelectedMovie={this.handleSelectedMovie}
              movieData={this.state.movieData}
              nowPlaying={this.state.nowPlaying}
              popularMovies={this.state.popularMovies}
              />}
            >
            </Route>
            <Route
              exact path="/about"
              element={<About />}
            >
            </Route>
            <Route
              exact path="/profile"
              element={<Profile />}
            >
            </Route>
            <Route
              exact path="/selectedmovie"
              element={<SelectedMovie 
              selectedMovie={this.state.selectedMovie}
              
              />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>

      </>
    )
  }
}

export default App;
