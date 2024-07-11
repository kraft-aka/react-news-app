import React, { useContext, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { NewsContext } from "../dataProvider/newsDataProvider";
import { Card, Button, Badge, Container } from "react-bootstrap";
import { formatDate } from "../utils/dateFormater";

const NewsPage = () => {
  const { newsData } = useContext(NewsContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const findNews = newsData.find((news) => news?.title === id);

  const placeholderImg =
    "https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  //const { title, author, content, description, publishedAt, source, url, urlToImage } = findNews;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  console.log(findNews);
  return (
    <Container style={{ paddingTop: "4rem" }}>
      <Card style={{ width: "90%" }} className="d-flex m-5">
        <Card.Body>
          <Card.Header>
            <Card.Title className="fs-2 fw-bold text-center m-5">
              {findNews?.title}
            </Card.Title>
          </Card.Header>
          <Card.Subtitle className="m-2">
            {findNews?.author}{" "}
            <Badge bg="secondary" className="text-end">
              {formatDate(findNews?.publishedAt)}
            </Badge>{" "}
          </Card.Subtitle>
          <Card.Subtitle className="m-2">
            Sourse: <Badge bg="success">{findNews?.source?.name}</Badge>
          </Card.Subtitle>
          <Card.Text className="mt-4 mb-2">{findNews?.description}</Card.Text>
          <Card.Text className="mt-4 mb-2">{findNews?.content}</Card.Text>
          <Card.Img
            variant="top"
            loading="lazy"
            src={findNews?.urlToImage ?? placeholderImg}
          />

          <Card.Footer>
            <Button
              className="m-3"
              variant="warning"
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
            <Link to={findNews?.url} target="_blank">
              <Button className="" variant="success">
                Read more
              </Button>
            </Link>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewsPage;
