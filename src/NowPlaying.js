// import React from 'react';
// // import { Card } from 'react-bootstrap';
// // import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";
// import Carousel from 'react-bootstrap/Carousel';


// class NowPlaying extends React.Component {

//   render() {

//     return (
//       <div className="movieSliders">
//         <Carousel>
//           {this.props.nowPlaying.map(movie => {
//             return (
//               <Carousel.Item>
//                 <Link to="/selectedmovie" className="nav-link" onClick={() => { this.props.handleSelectedMovie(movie) }}>
//                   <img
//                     className="d-block w-100"
//                     src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}
//                     alt="First slide"
//                   />

//                 </Link>
//                 <Carousel.Caption>
//                   {/* <h3>{movie.movie}</h3> */}
                  
//                 </Carousel.Caption>
//               </Carousel.Item>
//             )
//           }
//           )}
//         </Carousel>

//       </div>
//     );
//   }
// }

// export default NowPlaying;