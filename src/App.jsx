import React from "react";
import { NewsList } from "./pages/NewsList";
import NewsPage from "./pages/NewsPage";
import Navbar from "./pages/NavbarComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NewsDataProvider } from "./dataProvider/newsDataProvider";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <NewsDataProvider>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<NewsList />} />
            <Route path="/news/:id" element={<NewsPage />} />
          </Routes>
        </NewsDataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
