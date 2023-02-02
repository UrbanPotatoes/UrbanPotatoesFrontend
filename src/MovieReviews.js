import React from "react";
import './MovieReviews.css'

class MovieReviews extends React.Component {

  render() {


    return (
      <>

        <div className="newyorktimes">
          <img className="nyt-picture"src={require('./assets/newyorktimes.png')} alt=''></img>
          
         </div>

      </>
    )
  }
}

export default MovieReviews;