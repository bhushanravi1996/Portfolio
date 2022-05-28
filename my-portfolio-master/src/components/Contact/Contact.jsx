import React from 'react'
import TransitionsModal from '../Modal/ContactModal'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../Particle';
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


export const Contact = () => {
    return (
        <div>
            <Container fluid className="contact-section">
                <Particle />
                <Container fluid>
             <h1>FIND ME ON</h1>
             <br />
             <div style={{display: 'grid', marginLeft: 'auto', marginRight:'auto', width:'300px', gridTemplateColumns:'30% 30% 30%'}}>
              <div>
              <a href="https://github.com/asutoshb" style={{textDecoration: 'none', color:'white'}}> <AiFillGithub style={{height: '40px', width: '40px'}} /> </a>
              </div>
              <div>
                <a href="https://twitter.com/asutoshbehera5" style={{textDecoration: 'none', color:'white'}}><AiOutlineTwitter style={{height: '40px', width: '40px'}} /></a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/asutosh-behera-491908190/" style={{textDecoration: 'none', color:'white'}}><FaLinkedinIn style={{height: '40px', width: '40px'}} /></a>
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
            </Container>
            </Container>
        </div>
    )
}
