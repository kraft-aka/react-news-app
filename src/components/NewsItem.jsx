import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


export const NewsItem = (props) => {
  return (
    <Card className='card text-bg-dark mb-3 d-inline-block mx-3 my-3 px-2 py-2' style={{ maxWidth: '18rem'}}>
      <Card.Img variant="top" src={props.urlToImage} />
      <Card.Body>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">
          <a href={props.url} target="_blank">
            Get More Info
          </a>
        </Button>
        <Link to={`/news/${props.id}`}>
        <Button variant="primary" onClick={props.onShow}>
          Read here
        </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
