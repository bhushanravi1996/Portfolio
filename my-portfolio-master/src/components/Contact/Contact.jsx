import React,{useEffect} from 'react'
import TransitionsModal from '../Modal/ContactModal'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../Particle';
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";


export const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
    return (
      <Container fluid className="home-about-section" id="about">
         <Particle />
      <Container fluid>
         <Row>
          <Col md={12} className="home-about-social" data-aos="fade-up">
            <h1>FIND ME ON</h1>
            <div style={{display: 'grid', marginLeft: 'auto', marginRight:'auto', width:'300px', gridTemplateColumns:'30% 30% 30%'}}>
              <div>
              <a href="https://github.com/bhushanravi1996" target={"_blank"}  style={{textDecoration: 'none', color:'white'}}> <AiFillGithub style={{height: '40px', width: '40px'}} /> </a>
              </div>
              <div>
                <a href="https://twitter.com/RAVIBHU07369044" target={"_blank"} style={{textDecoration: 'none', color:'white'}}><AiOutlineTwitter style={{height: '40px', width: '40px'}} /></a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/ravi-bhushan-517566236/" target={"_blank"} style={{textDecoration: 'none', color:'white'}}><FaLinkedinIn style={{height: '40px', width: '40px'}} /></a>
              </div>
          </div>
          <br/>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            
            
            <h3>
              Contact No:
              <p
                href="tel:+9691721768"
                style={{
                  color: "#f0195a",
                }}
              >
                +919691721768
              </p>
            </h3>
            
            <h3>
              Email:
              <p
                href="tel:+9691721768"
                style={{
                  color: "#f0195a",
                }}
              >
                bhushanravi530@gmail.com
              </p>
            </h3>
            <br /> <br />
            <TransitionsModal />
          </Col>
        </Row>
         </Container>
     </Container>
       
    )
}
