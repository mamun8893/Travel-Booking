import React, { useEffect } from "react";
import "./my-booking.css";
import { Badge, Col, Container, Row, Table } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import useAuth from "../../hooks/UseAuth";
import { useState } from "react";
import swal from "sweetalert";

const MyBooking = () => {
  const [myBooking, setMyBooking] = useState([]);
  const [updateBooking, setUpdateBooking] = useState(false);
  const { user } = useAuth();
  const email = user.email;

  useEffect(() => {
    fetch(`https://blooming-ridge-64554.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setMyBooking(data));
  }, [updateBooking]);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `https://blooming-ridge-64554.herokuapp.com/orderDelete/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.acknowledged) {
              setUpdateBooking(true);
            }
          });
        swal("Item has been deleted!", {
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="my-order p-80">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="may-order-warper">
              <div className="heading text-center">
                <h2>My Booking</h2>
              </div>
              <Table striped borderless responsive>
                <thead>
                  <tr>
                    <th>Package Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myBooking.map((item) => {
                    return (
                      <tr key={item._id}>
                        <td>{item.package_title}</td>
                        <td>
                          {item.status ? (
                            <Badge pill bg="success">
                              Approved
                            </Badge>
                          ) : (
                            <Badge pill bg="secondary">
                              Pending
                            </Badge>
                          )}
                        </td>
                        <td>
                          <button onClick={() => handleDelete(item._id)}>
                            <AiOutlineDelete />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyBooking;
