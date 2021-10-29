import React from "react";
import "./package-details.css";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import breadcumbBg from "../../images/breadcrumb-bg.png";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/UseAuth";

const PackageDetails = () => {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState({});
  const { user } = useAuth();

  //Book Package
  const onSubmit = (data) => {
    data.package_title = packageDetails.title;
    data.status = false;
    fetch("https://blooming-ridge-64554.herokuapp.com/book-package", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          reset();
          swal("Good job!", "Book Package Successfully", "success");
        }
      })
      .catch((error) => {
        swal("Something went wrong!", `${error}`, "error");
      });
  };

  useEffect(() => {
    fetch(`https://blooming-ridge-64554.herokuapp.com/package/${id}`)
      .then((res) => res.json())
      .then((data) => setPackageDetails(data));
  }, []);

  return (
    <div className="package-details-area">
      {/* Breadcumb */}
      <div
        className="breadcumb-area"
        style={{ backgroundImage: `url(${breadcumbBg})` }}
      >
        <Container>
          <div className="breadcumb-content">
            <h2>Tour Package Details</h2>
            <div className="m-page-link">
              <NavLink to="/home" className="link first-link">
                Home
              </NavLink>
              <p className="link">Tour Details</p>
            </div>
          </div>
        </Container>
      </div>

      {/* Package Details */}
      <Container>
        <div className="package-details-warper p-80">
          <Row>
            <Col md={8}>
              <div className="package-details">
                <div className="details-image">
                  <img
                    src={packageDetails.details_image}
                    className="img-fluid"
                    alt="package"
                  />
                </div>
                <div className="details-content">
                  <h2>{packageDetails.title}</h2>
                  <p>{packageDetails.description}</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="package-details-form">
                <h2>Book This Package</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={user.displayName}
                    {...register("name")}
                    placeholder="Enter Name"
                  />
                  <input
                    type="email"
                    className="form-control"
                    defaultValue={user.email}
                    {...register("email")}
                    placeholder="Enter Email"
                  />
                  {/* <input
                    type="text"
                    className="form-control"
                    defaultValue={packageDetails.title}
                    {...register("package_title")}
                    placeholder="Enter Package Name"
                  /> */}
                  <input
                    type="number"
                    className="form-control"
                    {...register("phone")}
                    placeholder="Enter Phone Number"
                  />
                  <select {...register("ticket-type")} className="form-control">
                    <option>Select Travel Types</option>
                    <option value="travel with bus">travel with bus</option>
                    <option value="travel with plane">travel with plane</option>
                  </select>
                  <input
                    type="text"
                    className="form-control"
                    {...register("address")}
                    placeholder="Enter  Address"
                  />
                  <input type="submit" value="Book Now" className="main-btn" />
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default PackageDetails;
