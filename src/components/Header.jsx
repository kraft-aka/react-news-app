import React, { useContext } from "react";
import { NewsContext } from "../dataProvider/newsDataProvider";
import { Badge } from "react-bootstrap";

const Header = () => {
  const { category, country } = useContext(NewsContext);

  const countryObj = {
    us: "United States of America",
    de: "Germany",
    kr: "Korea",
    gb: "Greate Britain",
    at: "Austria",
    nl: "the Netherlands",
    tr: "Turkiye",
  };

  return (
    <header style={{ paddingTop: "7rem", textAlign: "center" }}>
      <h1>
        <Badge bg="danger" className="p-3">
          {category.toUpperCase()}
        </Badge>{" "}
        news from{" "}
        <Badge bg="success" className="p-3">
          {countryObj[country]}
        </Badge>
      </h1>
    </header>
  );
};

export default Header;
