import React, { useEffect } from "react";
import "./my-booking.css";
import { Col, Container, Row, Table } from "react-bootstrap";
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
    fetch(`http://localhost:5000/myOrders/${email}`)
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
        const url = `http://localhost:5000/orderDelete/${id}`;
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
              <Table striped borderless>
                <thead>
                  <tr>
                    <th>Package Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myBooking.map((item) => {
                    return (
                      <tr key={item._id}>
                        <td>{item.package_title}</td>
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
