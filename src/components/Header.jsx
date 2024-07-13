import React, { useContext } from "react";
import { NewsContext } from "../dataProvider/newsDataProvider";
import { Badge } from "react-bootstrap";

const Header = () => {
  const { category, country } = useContext(NewsContext);

  // used to display the values in the dropdown 
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
    <header className="fixed-top bg-light m-0" style={{ paddingTop: "6rem", textAlign: "center", zIndex: 1 }}>
      <h1 className="fw-bold">
        <Badge bg="danger" className="p-3">
          {category.toUpperCase()}
        </Badge>{" "}
        NEWS from{" "}
        <Badge bg="success" className="p-3">
          {countryObj[country]}
        </Badge>
      </h1>
    </header>
  );
};

export default Header;
