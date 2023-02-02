import React from 'react';
import "./about.css";
import Figure from "react-bootstrap/Figure";
import img from "./assets/profile.png"
import Dutch from "./assets/dutch.jpg"
import Marlon from "./assets/Marlon.jpeg"
import Yen from "./assets/Yen.png"

class About extends React.Component {

  render() {

    return (
      <>
        <h1>Project Members</h1>
        <Figure>
            <div class="img-wrapper">
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={Marlon}
                />
                <h2>Marlon Angulo Jr.</h2>
                <ul>
                  <li><a href="https://github.com/junior033"><i class="fab fa-github"></i></a></li>
                  
                </ul>
            </div>
          <Figure.Caption id='figCap'>
            A few words
            A few words 

          </Figure.Caption>
        </Figure>
        <Figure>
            <div class="img-wrapper">
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={Yen}
                />
                <h2>Yen Xiong Yuan</h2>
                <ul>
                  <li><a href="https://github.com/yenxiongyuan"><i class="fab fa-github"></i></a></li>
                  
                </ul>
            </div>
          <Figure.Caption id='figCap'>
            A Few words
            A few words

          </Figure.Caption>
        </Figure>
        <Figure>
            <div class="img-wrapper">
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={img}
                />
                <h2>Diontré Sanders</h2>
                <ul>
                  <li><a href="https://github.com/houseofjavascript"><i class="fab fa-github"></i></a></li>
                  
                </ul>
            </div>
          <Figure.Caption id='figCap'>
            A few words
            A few words

          </Figure.Caption>
        </Figure>
        <Figure>
            <div class="img-wrapper">
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={img}
                />
                <h2>Joseph Davitt</h2>
                <ul>
                  <li><a href="https://https://github.com/j-davitt"><i class="fab fa-github"></i></a></li>
                  
                </ul>
            </div>
          <Figure.Caption id='figCap'>
          A few words
          A few words

          </Figure.Caption>
        </Figure>
        <Figure>
            <div class="img-wrapper">
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={Dutch}
                />
                <h2>Dutch Foy</h2>
                <ul>
                  <li><a href="https://github.com/jdutchfoy"><i class="fab fa-github"></i></a></li>
                  
                </ul>
            </div>
          <Figure.Caption id='figCap'>
          My name is Dutch (yes it's my real name), I am a Full-stack software development student and a US NAVY Veteran. I am looking for a company that offers both an innovative and challenging environment, while fostering, and cultivating my personal growth and development ensuring a history of successful project delivery.
          </Figure.Caption>
        </Figure>
      </>
    );
  }
}

export default About;