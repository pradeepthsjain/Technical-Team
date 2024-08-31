import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-mainn.png";
import Tilt from "react-parallax-tilt";
import {

  AiFillInstagram,
} from "react-icons/ai";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> OUR </span> VISION
            </h1>
            <p className="home-about-body">
            As the Technical Team of the M.C.A Department at Bangalore Institute of Technology,
              
              <br />our mission is driven by a shared passion for innovation and a desire to make a tangible impact.
              <i>
                <b className="purple"> We believe in the power of technology to transform ideas into reality. </b>
              </i>
              <br />
              <br />
              It’s not just the studies we do in classes these extracurricular activities help us build a broader
              <i> <b className="purple">  skill set, foster creativity.</b></i>
           
             
              <br />
              <br />
              We do what we do because we believe in
               <b className="purple"> learning extends beyond the classroom.</b> 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>OUR SOCIALS</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="home-about-social-links">
             
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mcabit_1997?igsh=dmFlenAwMXBiajZi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
