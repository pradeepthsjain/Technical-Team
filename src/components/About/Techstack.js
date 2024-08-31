import React from "react";
import { Col, Row } from "react-bootstrap";
import sahil from "../../Assets/Sahil.jpg";
import sadhvi from "../../Assets/Sadhvi.jpg";
import sai from "../../Assets/Sai Tharun.jpg";
import pavan from "../../Assets/pavan.jpg";
import chirag from "../../Assets/Chirag.png";
import harshitha from "../../Assets/Harshitha.jpg";
import keerthi from "../../Assets/Keerthi.jpeg";
import lavanya from "../../Assets/Lavanya.jpg";
import shri from "../../Assets/Shrilakshmi.JPG";
import shetha from "../../Assets/Shwetha.JPG";
import pradeepth from "../../Assets/Pradeepth.jpeg";
import "../../components/About/Techstack.css";
import Tilt from "react-parallax-tilt";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={4} className="tech-icons">
        <Tilt>
          <img src={sahil} alt="Sahil" />
          <div className="name-overlay">Sahil Belurkar</div>
        </Tilt>
      </Col>
      <Col md={4} className="tech-icons">
        <Tilt>
          <img src={sadhvi} alt="Sadhvi" />
          <div className="name-overlay">Sadhvi Thakur</div>
        </Tilt>
      </Col>
      <Col md={4} className="tech-icons">
        <Tilt>
          <img src={sai} className="img-fluid" alt="Sai Tharun" />
          <div className="name-overlay">Sai Tharun</div>
        </Tilt>
      </Col>
      <Col md={4} className="tech-icons">
        <Tilt>
          <img src={harshitha} className="img-fluid" alt="Harshitha" />
          <div className="name-overlay">Harshitha</div>
        </Tilt>
      </Col>
      <Col md={4} className="tech-icons">
        <Tilt>
          <img src={chirag} className="img-fluid" alt="Chirag" />
          <div className="name-overlay">Chirag D</div>
        </Tilt>
      </Col>
      <Col md={4} className="tech-icons">
        <Tilt>
          <img src={pavan} className="img-fluid" alt="Pavan" />
          <div className="name-overlay">Pavan Kumar MV</div>
        </Tilt>
      </Col>
     
      
      <Col md={4} className="tech-icons">
        <Tilt>
          <img src={keerthi} className="img-fluid" alt="Keerthi" />
          <div className="name-overlay">Keerthi Shetti</div>
        </Tilt>
      </Col>
      <Col md={4} className="tech-icons">
        <Tilt>
          <img src={lavanya} className="img-fluid" alt="Lavanya" />
          <div className="name-overlay">Lavanya</div>
        </Tilt>
      </Col>
      <Col md={4} className="tech-icons">
        <Tilt>
          <img src={shri} className="img-fluid" alt="Shrilakshmi" />
          <div className="name-overlay">Shrilakshmi</div>
        </Tilt>
      </Col>
      <Col md={4} className="tech-icons">
        <Tilt>
          <img src={shetha} className="img-fluid" alt="Shwetha" />
          <div className="name-overlay">Shwetha</div>
        </Tilt>
      </Col>
      <Col md={4} className="tech-icons">
        <Tilt>
          <img src={pradeepth} className="img-fluid" alt="Pradeepth" />
          <div className="name-overlay">Pradeepth S Jain</div>
        </Tilt>
      </Col>
    </Row>
  );
}

export default Techstack;
