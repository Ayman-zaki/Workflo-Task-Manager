import React from "react";
import { Route, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

function Projects() {
  return (
    <div className="outter-card">
      {/* <h2 className="title2">List of Projects</h2> */}
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="data:image/png;base64,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"
          />
          <Card.Body>
            <Card.Title>Requirement gathering and analysis</Card.Title>
            <Card.Text>Gather and document business requirements</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: "purple" }} href="/todolist">
            View Project
            </Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="data:image/png;base64,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"
          />
          <Card.Body>
            <Card.Title>Design</Card.Title>
            <Card.Text>
              Translate software development requirements into design
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: "purple" }} href="/todolist">
              View Project
            </Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="data:image/png;base64,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"
          />
          <Card.Body>
            <Card.Title>Software development</Card.Title>
            <Card.Text>Build the actual software</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: "purple" }} href="/todolist">
            View Project
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
      <br />
      <br />
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkD7pHbwiFB1yZZT_jce9SxBN5A3brvOPLLQ&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Testing</Card.Title>
            <Card.Text>Ensure the software meets requirements</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: "purple" }} href="/todolist">
            View Project
            </Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="data:image/png;base64,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"
          />
          <Card.Body>
            <Card.Title>Deployment</Card.Title>
            <Card.Text>Deliver completed software to users</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: "purple" }} href="/todolist">
            View Project
            </Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="data:image/png;base64,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"
          />
          <Card.Body>
            <Card.Title>Maintenance</Card.Title>
            <Card.Text>
              Maintenan software and implement enhancements as needed
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: "purple" }} href="/todolist">
            View Project
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Projects;
