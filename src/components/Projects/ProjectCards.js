import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* If the component contains a Form link, it will render the form button */}
        {props.formLink && (
          <Button
            variant="primary"
            href={props.formLink}
            target="_blank"
          >
            <CgWebsite /> &nbsp;
            {"Form"}
          </Button>
        )}

        {/* If the component contains a Feedback link, it will render the feedback button */}
        {props.feedbackLink && (
          <Button
            variant="secondary"
            href={props.feedbackLink}
            target="_blank"
            style={{ marginLeft: "10px" }} // Adjust margin to your preference
          >
            <FaRegComment /> &nbsp;
            {"Feedback"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
