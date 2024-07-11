import React, { useContext } from "react";
import { NewsCard } from "../components/NewsCard";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import { NewsContext } from "../dataProvider/newsDataProvider";

export const NewsList = () => {
  const { newsData, isLoading, errorMsg } = useContext(NewsContext);

  if (!newsData && errorMsg) return <p>No articles found!</p>;

  const newsItems =
    newsData &&
    newsData.map((news, index) => (
      <Col key={index} lg='3'>
        <NewsCard
          author={news.author}
          description={news.description}
          title={news.title}
          url={news.url}
          urlToImage={news.urlToImage}
          content={news.content}
          id={news.title}
        />
      </Col>
    ));

  return (
    <Container fluid style={{ paddingTop: '6rem'}} >
      {isLoading ? (
        <Spinner animation="border" role="status" variant="primary" size="lg" />
      ) : (
        <Row className="justify-content-center" style={{ gap:'2rem' }}>{newsItems}</Row>
      )}
    </Container>
  );
};
