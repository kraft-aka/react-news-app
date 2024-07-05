import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export const NewsItem = (props) => {
  return (
    <Card className='card text-bg-dark mb-3' style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.urlToImage} />
      <Card.Body>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">
          <a href={props.url} target="_blank">
            Get More Info
          </a>
        </Button>
        <Button variant="primary" onClick={props.onShow}>
          Read here
        </Button>
      </Card.Body>
    </Card>
  );
};
