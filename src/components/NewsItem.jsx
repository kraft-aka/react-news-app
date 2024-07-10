import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NewsItem = (props) => {
  const { title, urlToImage, description, url, id, onShow } = props;

  const shortendDescription = (description && description.slice(0, 30)) || null;
  console.log(shortendDescription);
  return (
    <Card
      className="text-bg-dark mb-3"
      style={{ maxWidth: "18rem", height: "30rem" }}
    >
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title className="text-center m-2">{title}</Card.Title>
        <Card.Text className="m-2 p-2">{shortendDescription}</Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Button variant="primary">
            <a href={url} target="_blank">
              Get More Info
            </a>
          </Button>
          <Link to={`/news/${id}`}>
            <Button variant="primary" onClick={onShow}>
              Read here
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
