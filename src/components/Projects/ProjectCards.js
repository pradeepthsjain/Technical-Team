import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { FiDownload } from "react-icons/fi"; // Import download icon

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Form Button */}
        {props.formLink && (
          <Button variant="primary" href={props.formLink} target="_blank">
            <CgWebsite /> &nbsp; {"Form"}
          </Button>
        )}

        {/* Feedback Button */}
        {props.feedbackLink && (
          <Button
            variant="secondary"
            href={props.feedbackLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaRegComment /> &nbsp; {"Feedback"}
          </Button>
        )}

        {/* Download Brochure Button */}
        {props.brochureLink && (
          <Button
            variant="success"
            href={props.brochureLink}
            download
            style={{ marginLeft: "10px" }}
          >
            <FiDownload /> &nbsp; {"Brochure"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
