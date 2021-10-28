import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blog1 from "../../images/blog-1.jpg";
import blog2 from "../../images/blog-2.jpg";
import blog3 from "../../images/blog-3.jpg";
import { BiUserCircle, BiComment } from "react-icons/bi";

const Blog = () => {
  return (
    <div className="blog-area p-80">
      <Container>
        <div className="heading text-center">
          <p>CHECK OUT OUR</p>
          <h2>Latest News & Articles</h2>
        </div>
        <Row>
          {/* Item 1 */}
          <Col md={4}>
            <div className="blog-item tour-package-item">
              <div className="image">
                <img src={blog1} className="img-fluid" alt="blog" />
              </div>
              <div className="content">
                <ul>
                  <li>
                    <BiUserCircle /> Admin
                  </li>
                  <li>
                    <BiComment /> 2 Comments
                  </li>
                </ul>
                <h3>14 Things to see and do when visiting japan</h3>
              </div>
            </div>
          </Col>
          {/* Item 2 */}
          <Col md={4}>
            <div className="blog-item tour-package-item">
              <div className="image">
                <img src={blog2} className="img-fluid" alt="blog" />
              </div>
              <div className="content">
                <ul>
                  <li>
                    <BiUserCircle /> Admin
                  </li>
                  <li>
                    <BiComment /> 5 Comments
                  </li>
                </ul>
                <h3>Journeys are best measured in new friends</h3>
              </div>
            </div>
          </Col>
          {/* Item 3 */}
          <Col md={4}>
            <div className="blog-item tour-package-item">
              <div className="image">
                <img src={blog3} className="img-fluid" alt="blog" />
              </div>
              <div className="content">
                <ul>
                  <li>
                    <BiUserCircle /> Admin
                  </li>
                  <li>
                    <BiComment /> 3 Comments
                  </li>
                </ul>
                <h3>Travel the most beautiful places in the world</h3>
              </div>
            </div>
          </Col>
          {/* Item ENd */}
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
