import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const PackagItem = (props) => {
  const { _id, title, thumb_image, description } = props.packageData;
  return (
    <Col md={4}>
      <div className="tour-package-item">
        <div className="image">
          <img src={thumb_image} className="img-fluid" alt="package" />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <p>{description.slice(0, 120)}</p>
          <NavLink to={`/package-details/${_id}`}>
            <button className="main-btn">Book Now</button>
          </NavLink>
        </div>
      </div>
    </Col>
  );
};

export default PackagItem;
