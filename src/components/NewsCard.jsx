import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NewsCard = (props) => {
  const { title, url, id, onShow } = props;
  let { urlToImage } = props;

  const placeholderImg =
    "https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  if (!urlToImage) {
    urlToImage = placeholderImg;
  }

  const shortenedTitle = (title && title.slice(0, 81)) || null;

  return (
    <Card
      className="text-bg-dark mb-3"
      style={{ maxWidth: "18rem", height: "30rem" }}
    >
      <Card.Img
        variant="top"
        src={urlToImage}
        style={{ height: "10rem", width: "auto", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="text-center m-2">{title}</Card.Title>
        {/* <Card.Text className="m-2 p-2">{shortendDescription}</Card.Text> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: '5rem',
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
