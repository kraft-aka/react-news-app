import React from "react";
import { NewsList } from "./pages/NewsList";
import NewsPage from "./pages/NewsPage";
import Navbar from "./pages/NavbarComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
