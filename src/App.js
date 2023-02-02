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

import Login from './Login';
import Logout from './Logout';
import Profileauth from './Profileauth';
import { withAuth0 } from "@auth0/auth0-react";

import SearchResults from './SearchResults';






class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      movieData: [],
      comments: [],
      userEmail: 'joseph.j.davitt@gmail.com',
      userFavorites: [],
      userWatched: [],
      userWatchlist: [],
      nowPlaying: [],
      popularMovies: [],
      movieDataFromDB: [],
      selectedMovie: {},
    };
  }


  async componentDidMount() {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;

      console.log("token: ", jwt);

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "get",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/movies",
      };

      let movieData = await axios(config);

      this.setState({
        movies: movieData.data,
      });
    }

  resetMovies = () => {
    this.setState({
      movieData: []
    })
  }

  handleProfile = () => {
    let newUser = {
      email: this.state.userEmail,
      favoritelist: this.state.userFavorites,
      watchlaterlist: this.state.userWatchlist,
      watchedlist: this.state.userWatched,
    }
    console.log('new User from handleProfile >>>', newUser);
    this.postUser(newUser);
  }

  postUser = async (userObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/user/${userObj.email}`
      let createdUser = await axios.post(url, userObj);
      this.setState({
        user: createdUser.data
      })

    } catch (error) {
      console.log(error.message);

    }
  }

  handleUserFavorite = (movie) => {
    this.setState({
      userFavorites: [...this.state.userFavorites, movie]
    })
  }

  handleUserWatched = (movie) => {
    this.setState({
      userWatched: [...this.state.userWatched, movie]
    })
  }

  handleUserWatchlist = (movie) => {
    this.setState({
      userWatchlist: [...this.state.userWatchlist, movie]
    })
  }

  getMovieData = async (e) => {
    e.preventDefault();
    console.log('got the movies');
  

    try {
      let url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.movie}`;
      console.log(url);

      let movieData = await axios.get(url);
      console.log(movieData.data);

      this.setState({
        movieData: movieData.data,
      });


    } catch (error) {
      console.log(error.response);
    }
  };

  getNowPlaying = async () => {
    console.log("got the movies");

    try {
      let url = `${process.env.REACT_APP_SERVER}/getNow`;
      console.log(url);

      let movieData = await axios.get(url);
      console.log(movieData.data);

      this.setState({
        nowPlaying: movieData.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  getPopularMovies = async () => {
    console.log("got the movies");

    try {
      let url = `${process.env.REACT_APP_SERVER}/getPopular`;
      console.log(url);

      let movieData = await axios.get(url);
      console.log(movieData.data);

      this.setState({
        popularMovies: movieData.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  postMovie = async (movieObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/movies/${movieObj.movieId}`;
      let createdMovie = await axios.post(url, movieObj);
      this.setState({
        movieDataFromDB: createdMovie.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleSelectedMovie = (movie) => {
    this.postMovie(movie);

    // this.setState({
    //   selectedMovie: movie
    // })
  };

  handleInput = (e) => {
    this.setState({
      movie: e.target.value,
    });
  };

  componentDidMount() {
    this.getNowPlaying();
    this.getPopularMovies();
  }

  render() {
    return (
      <>
        <Router>

          <Header 
          resetMovies={this.resetMovies}
          handleProfile={this.handleProfile}
          />
          <Login />
          <Logout />
          <Profileauth />
         
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
              handleUserFavorite={this.handleUserFavorite}
              handleUserWatched={this.handleUserWatched}
              handleUserWatchlist={this.handleUserWatchlist}
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
              element={<Profile 
              userFavorites={this.state.userFavorites}
              userWatched={this.state.userWatched}
              userWatchlist={this.state.userWatchlist}
              />}
            >
            </Route>
            <Route
              exact path="/selectedmovie"
              element={<SelectedMovie 
              selectedMovie={this.state.selectedMovie}
              movieDataFromDB={this.state.movieDataFromDB}
              
              />}
            >
            </Route>
            <Route
              exact path="/search"
              element={<SearchResults 
                handleSelectedMovie={this.handleSelectedMovie}
                movieData={this.state.movieData}
              />}
            >
            </Route>

          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
