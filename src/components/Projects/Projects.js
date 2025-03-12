import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dnc from "../../Assets/dnc.jpeg";
import dnc2 from "../../Assets/dnc2.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           Recent <strong className="purple">Events</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the events that we have conducted recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={dnc2}
    isBlog={false}
    title="DNC 2.0"
    description="Divide and Conquer 2.0 is back bigger and bolder.! Five Thrilling technical events run in parallel, but choose wisely you can compete in only one.! Team up in pairs and take on the challenge..!"
    formLink="https://docs.google.com/forms/d/e/1FAIpQLScCa6hi5PfyXeUeGFHfMHF99P61tXuNmlMixXadSiQl82gNGA/viewform"
    brochureLink="/brochures/dnc brochure.pdf" // Path to your brochure file
  />
</Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dnc}
              isBlog={false}
              title="DNC"
              description="Divide and Conquer is an exciting technical event featuring three challenging rounds designed to test participants..!"
              //formLink="https://docs.google.com/forms/d/e/1FAIpQLSf1Q-tx97pOqs5Yl3MX-jnZj3nqEv_F_zBbCCbut63MA0dsbQ/viewform"
              //feedbackLink="https://docs.google.com/forms/d/e/1FAIpQLSf1Q-tx97pOqs5Yl3MX-jnZj3nqEv_F_zBbCCbut63MA0dsbQ/viewform"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
