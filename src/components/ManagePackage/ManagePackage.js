import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Table, Badge } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import swal from "sweetalert";

const ManagePackage = () => {
  const [managePackage, setManagePackage] = useState([]);
  const [updateBooking, setUpdateBooking] = useState(false);
  let statusBtnRef = useRef();
  useEffect(() => {
    fetch("https://blooming-ridge-64554.herokuapp.com/manage-package")
      .then((res) => res.json())
      .then((data) => setManagePackage(data));
  }, [updateBooking]);

  // const managePackageItem=managePackage.filter(item=>item._id)

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

  const handleUpdateStatus = (id) => {
    const url = `https://blooming-ridge-64554.herokuapp.com/manage-package/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(managePackage),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setUpdateBooking(true);
          if (statusBtnRef.current) {
            statusBtnRef.current.setAttribute("disabled", "disabled");
          }
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
                <h2>Manage Package</h2>
              </div>
              <Table striped borderless responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Package Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {managePackage.map((item) => {
                    return (
                      <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
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
                          <button
                            disabled={item.status}
                            ref={statusBtnRef}
                            onClick={() => handleUpdateStatus(item._id)}
                          >
                            Approve
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

export default ManagePackage;
