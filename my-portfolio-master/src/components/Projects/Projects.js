import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";



// import emotion from "../../Assets/Projects/emotion.jpeg";


// import suicide from "../../Assets/Projects/suicide.png";


import Indiamart from "../../Assets/Projects/Indiamart.png";
import Dunzo from "../../Assets/Projects/Dunzo.png"
import Kimaye from "../../Assets/Projects/Kimaye.png"
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Indiamart}
              isBlog={false}
              title="IndiaMart Clone "
              description="IndiaMart is an ecommerce website which provides cosmetics products to user "
              tech="HTML  |  CSS  |  JavaScript "
              link="https://github.com/pandeyratnesh1997/UNIT-2-CW-PROJECT-_INDIAMART"
              linkmedium=""
              linklive="https://indiamartcloned.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Dunzo}
              isBlog={false}
              title="Dunzo Clone "
              description="Dunzo is a web application to deliver grocreries, fruits, vegetables, meat etc"
              tech="HTML  |  CSS  |  JavaScript  "
              link="https://github.com/Rounak-09/Dunzo"
              linkmedium=""
              linklive="https://stirring-mandazi-87d93f.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={Kimaye}
              isBlog={false}
              title="Kimaye Clone"
              description="Kimaye is online fruit ordering platform in Mumbai and it is a promise of consistently delivering the safest and superior quality fruits."
              tech="ReactJs  |  JavaScript  |  HTML  |  CSS"
              link="https://github.com/SankalpJaiswal/kimaye-clone.git"
              linkmedium=""
              linklive="https://dazzling-yeot-ee9a66.netlify.app/"
            />
          </Col>

          {/* <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={Grocery}
              isBlog={false}
              title="Grocery App"
              description="A simple grocery management application for users"
              tech="ReactJs  |  CSS"
              link="https://github.com/asutoshb/grocery-store"
              linkmedium=""
              linklive="https://asutoshb.github.io/grocery-store/"
            />
          </Col> */}

          {/* <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Tictac}
              isBlog={false}
              title="Tic tac Toe Game"
              description="A simple tic-tac-toe game where users can play the game and see their history of moves as well"
              tech="ReactJs  |  CSS"
              link="https://github.com/asutoshb/Tic-Tac-Toe-react"
              linkmedium="#"
              linklive="https://asutoshb.github.io/Tic-Tac-Toe-react/"
            />
          </Col> */}


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;