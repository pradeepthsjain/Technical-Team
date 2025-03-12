import React from "react";
import { Col, Row } from "react-bootstrap";
import sahil from "../../Assets/Sahil.jpg";
import sadhvi from "../../Assets/Sadhvi.jpg";
import sai from "../../Assets/Sai Tharun.jpg";
import pavan from "../../Assets/pavan.jpg";
import chirag from "../../Assets/Chirag.png";
import harshitha from "../../Assets/Harshitha.jpg";
import srini from "../../Assets/srnivas.jpg";
import lavanya from "../../Assets/Lavanya.jpg";
import niki from "../../Assets/Nikitha.jpg";
import liki from "../../Assets/Likith.jpg";
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
          <img src={lavanya} className="img-fluid" alt="Lavanya" />
          <div className="name-overlay">Lavanya</div>
        </Tilt>
      </Col>
      <Col md={4} className="tech-icons">
        <Tilt>
          <img src={niki} className="img-fluid" alt="Nikitha Pinto" />
          <div className="name-overlay">Nikitha Pinto</div>
        </Tilt>
      </Col>
      <Col md={4} className="tech-icons">
        <Tilt>
          <img src={liki} className="img-fluid" alt="Likith Kumar" />
          <div className="name-overlay">Likith Kumar</div>
        </Tilt>
      </Col>
      <Col md={4} className="tech-icons">
        <Tilt>
          <img src={srini} className="img-fluid" alt="Srinivas" />
          <div className="name-overlay">Srinivas</div>
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
