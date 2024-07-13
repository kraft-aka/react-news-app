import React, { useContext } from "react";
import { NewsCard } from "../components/NewsCard";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import { NewsContext } from "../dataProvider/newsDataProvider";

export const NewsList = ({ query }) => {
  const { newsData, isLoading, errorMsg } = useContext(NewsContext);

  // filtering data with a query
  const filteredNewsData = newsData.filter((news) => {
    return news?.title.toLowerCase().includes(query.toLowerCase());
  });

  // renders error text if no data fetched
  if (!newsData && errorMsg) return <p>No articles found!</p>;

  // all data items to be rendered in the main page
  const newsItems =
    newsData &&
    filteredNewsData &&
    filteredNewsData.map((news, index) => (
      <Col key={index} xl={2} lg={3} md={4} sm={6}>
        <NewsCard
          author={news.author}
          description={news.description}
          title={news.title}
          url={news.url}
          urlToImage={news.urlToImage}
          content={news.content}
          id={news.title.slice(0,10)}
        />
      </Col>
    ));

  return (
    <Container fluid style={{ paddingTop: "12rem" }} className="bg-light">
      {isLoading ? (
        <Spinner animation="border" role="status" variant="primary" size="lg" />
      ) : (
        <Row className="justify-content-center" style={{ gap: "2rem" }}>
          {newsItems}
        </Row>
      )}
    </Container>
  );
};
