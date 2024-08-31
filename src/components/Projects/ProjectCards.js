import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* If the component contains a Form link, it will render the below component */}
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
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
