import React, { createContext, useMemo, useState, useEffect } from "react";
import axios from "axios";

const NewsContext = createContext();

export const NewsDataProvider = ({ children }) => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState('us')

  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

  const getNewsData = async () => {
    try {
      setIsLoading(true);
      const data = await axios.get(url);
      setNewsData(data.data.articles);
      setIsLoading(false);
    } catch (error) {
      setErrorMsg(true);
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false);
      setErrorMsg(false);
    }
  };

  console.log(newsData);

  useEffect(() => {
    getNewsData();
  }, [category, country]);

  const memoizedNewsData = useMemo(() => newsData, [newsData]);

  return (
    <NewsContext.Provider
      value={{
        newsData: memoizedNewsData,
        setNewsData,
        errorMsg,
        setErrorMsg,
        isLoading,
        setIsLoading,
        category,
        setCategory,
        country,
        setCountry
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsContext };
