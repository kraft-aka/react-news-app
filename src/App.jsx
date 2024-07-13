import React, { useState } from "react";
import { NewsList } from "./pages/NewsList";
import NewsPage from "./pages/NewsPage";
import Navbar from "./pages/NavbarComponent";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NewsDataProvider } from "./dataProvider/newsDataProvider";
import Header from "./components/Header";

function App() {
  const [query, setQuery] = useState("");

  // receives the query string from navbar
  const getDataFromQuery = (data) => {
    setQuery(data);
  };

  return (
    <>
      <BrowserRouter>
        <NewsDataProvider>
          <Navbar getDataFromQuery={getDataFromQuery} />
          <Header />
          <Routes>
            <Route path="/" element={<NewsList query={query} />} />
            <Route path="/news/:id" element={<NewsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </NewsDataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
