import React from "react";
import { NewsList } from "./pages/NewsList";
import Navbar from "./pages/NavbarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return <>
    <Navbar />
    <h1>News Website</h1>
    <NewsList />
  </>;
}

export default App;
