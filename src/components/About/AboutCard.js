import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, We are <span className="purple">Technical Team </span>
            from <span className="purple"> M.C.A Department,<br />Bangalore Institute Of Technology.</span>
            <br />
            Our team of 11 passionate members is always buzzing with energy and innovation..!
            <br />
            As a team, we are committed to pushing the boundaries of technology and knowledge.
            <br />
            <br />
            We conduct a variety of exciting activities, including:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hackathons: Where creativity meets code.
            </li>
            <li className="about-activity">
              <ImPointRight /> Quizzes: Test your tech knowledge.
            </li>
            <li className="about-activity">
              <ImPointRight /> Workshops: Hands-on learning experiences.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
