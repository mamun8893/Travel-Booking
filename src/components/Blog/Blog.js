import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blog1 from "../../images/blog-1.jpg";
import blog2 from "../../images/blog-2.jpg";
import blog3 from "../../images/blog-3.jpg";

const Blog = () => {
  return (
    <div className="blog-area">
      <Container>
        <div className="heading text-center">
          <p>CHECK OUT OUR</p>
          <h2>Latest News & Articles</h2>
        </div>
        <Row>
          <Col md={4}>
            <div className="blog-item tour-package-item">
              <div className="image">
                <img src={blog1} className="img-fluid" alt="blog" />
              </div>
              <div className="content">
                <ul>
                  <li>Admin</li>
                  <li>2 Comments</li>
                </ul>
                <h3>14 Things to see and do when visiting japan</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
