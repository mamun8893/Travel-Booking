import React, { useState, useEffect } from "react";
import "./package.css";
import { Container, Row } from "react-bootstrap";
import PackagItem from "./PackagItem";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/package")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div className="tour-package-area p-80">
      <Container>
        <div className="heading text-center">
          <p>Choose Your Package</p>
          <h2>Best Tour Package</h2>
        </div>
        <Row>
          {packages.map((packageData) => (
            <PackagItem
              packageData={packageData}
              key={packageData._id}
            ></PackagItem>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Packages;
