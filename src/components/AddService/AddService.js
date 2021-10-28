import React from "react";
import "./add-service.css";
import { Row, Card, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddService = () => {
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
          swal("Good job!", "Add Service Successfully", "success");
        }
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
                  {...register("description")}
                  placeholder="Enter Description"
                />
                <input
                  type="text"
                  className="form-control"
                  {...register("image")}
                  placeholder="Enter Image URL"
                />
                <input type="submit" value="Add Service" className="main-btn" />
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddService;
