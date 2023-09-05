import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./NewsItem.css";

export const NewsItem = (props) => {
  return (
    <Card className="news-card">
      <Card.Img variant="top" src={props.urlToImage} />
      <Card.Body className="news-card-body">
        <Card.Title className="news-card-title">{props.title}</Card.Title>
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
