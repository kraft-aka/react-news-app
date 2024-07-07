import React, { useContext } from "react";
import  { v4 as uuid } from 'uuid'
import { NewsItem } from "../components/NewsItem";
import { Spinner } from "react-bootstrap";
import { NewsContext } from "../dataProvider/newsDataProvider";

export const NewsList = () => {
  const { newsData, isLoading, errorMsg } = useContext(NewsContext);

  if (!newsData && errorMsg) return <p>No articles found!</p>;

  const newsItems =
    newsData &&
    newsData.map((news, index) => (
      <NewsItem
        key={index}
        author={news.author}
        description={news.description}
        title={news.title}
        url={news.url}
        urlToImage={news.urlToImage}
        content={news.content}
        id={news.title}
      />
    ));

  return (
    <div className="news-list">
      {isLoading ? (
        <Spinner animation="border" role="status" variant="primary" size="lg" />
      ) : (
        <ul>{newsItems}</ul>
      )}
    </div>
  );
};
