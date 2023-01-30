import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Bootstrap from 'react-bootstrap'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import About from './About';
import Movies from './Movies';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      comments: [],
      user: [],
    }
  }


  getMovies = async () => {
    console.log('got the movies');
    try {
      // let url = `${process.env.REACT_APP_SERVER}/movies`
      let url = `https://api.themoviedb.org/3/movie/popular?api_key=657e3c5bf7cede69dd3283c3d78e1d03&language=en-US&page=1`

      let movieData = await axios.get(url);
      console.log(movieData.data.results);

      this.setState({
        movies: movieData.data.results,
      });
    } catch (error) {
      console.log(error.response)

    }
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    console.log('App State');
    return (
      <>

        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Movies movies={this.state.movies} />

      </>
    )
  }
}

export default App;
