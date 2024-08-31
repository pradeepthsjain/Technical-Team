import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dnc from "../../Assets/dnc.jpeg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           Recent <strong className="purple">Events </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the events that we have conducted recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dnc}
              isBlog={false}
              title="DNC"
              description="Divide and Conquer is a technical event that consists of three rounds. The first round is Power of Perception, followed by Hidden Glyph, and the final round is Error Eraser."
             //ghLink=""
               formLink="https://docs.google.com/forms/d/e/1FAIpQLSf1Q-tx97pOqs5Yl3MX-jnZj3nqEv_F_zBbCCbut63MA0dsbQ/viewform"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
