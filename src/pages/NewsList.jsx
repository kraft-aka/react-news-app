import React, { useState, useEffect } from "react";
import axios from "axios";
import { NewsItem } from "../components/NewsItem";
import { Spinner } from "react-bootstrap";

export const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  const showModalHandler = () => setShow(true);

  const hideModalHandler = () => setShow(false);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=45df1892fbc245638f36b304a8d7f9f0"
      )
      .then((response) => {
        setIsLoading(true);
        setArticles(response.data.articles);
        console.log(response.data.articles);
        setIsLoading(false);
      });
  }, []);

  if (!articles) return <p>No articles found!</p>;

  const newsItems = articles.map((news) => (
    <NewsItem
      key={Math.random().toString()}
      author={news.author}
      description={news.description}
      title={news.title}
      url={news.url}
      urlToImage={news.urlToImage}
      content={news.content}
      onShow={showModalHandler}
      onClose={hideModalHandler}
    />
  ));

  return (
    <div className="news-list">
      {isLoading ? <Spinner /> : <ul>{newsItems}</ul>}
    </div>
  );
};
