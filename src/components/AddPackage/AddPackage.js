import React from "react";
import "./add-package.css";
import { Row, Card, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddPackage = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/add-service", {
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
          swal("Good job!", "Add Package Successfully", "success");
        }
      })
      .catch((error) => {
        swal("Something went wrong!", `${error}`, "error");
      });
  };
  return (
    <div className="add-service-area p-80">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  className="form-control"
                  {...register("title")}
                  placeholder="Enter Title"
                />
                <input
                  type="text"
                  className="form-control"
                  {...register("thumb_image")}
                  placeholder="Enter Thumbnil Image URL"
                />
                <input
                  type="text"
                  className="form-control"
                  {...register("details_image")}
                  placeholder="Enter Details Image URL"
                />
                <textarea
                  type="text"
                  className="form-control"
                  rows={3}
                  {...register("description")}
                  placeholder="Enter Description"
                />
                <input type="submit" value="Add Package" className="main-btn" />
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddPackage;
