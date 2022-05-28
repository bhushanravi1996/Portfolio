import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Made by Ravi Bhushan  with ❤️</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3> </h3>
        </Col>
        <Col md="4" className="footer-body">
         <div style={{display: 'grid', marginLeft: 'auto',  width:'200px', gridTemplateColumns:'30% 30% 30%'}}>
              <div>
              <a href="https://github.com/asutoshb" style={{textDecoration: 'none', color:'white'}}> <AiFillGithub style={{height: '20px', width: '20px'}} /> </a>
              </div>
              <div>
                <a href="https://twitter.com/asutoshbehera5" style={{textDecoration: 'none', color:'white'}}><AiOutlineTwitter style={{height: '20px', width: '20px'}} /></a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/asutosh-behera-491908190/" style={{textDecoration: 'none', color:'white'}}><FaLinkedinIn style={{height: '20px', width: '20px'}} /></a>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;