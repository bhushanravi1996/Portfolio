import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Asutosh_Behera_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-up"
        >
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume" data-aos="fade-up">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">EXPERIENCE</h3>
            <Resumecontent
              title="Software Engineer @Vyapar"
              date="December 2021 - Present"
              content={[
                "Currently working on Bank reconciliation project",
                "Working on Desktop app",
              ]}
            />
            <h3 className="resume-title">Internship</h3>
            <Resumecontent
              title="STUDENT INTERN [ IIT Guwahati ]"
              date="March 2019 - July 2019"
              content={[
                "Built a portable vein viewer device using raspberry pi, which can be used by nurses to see the veins of patients while giving injections",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="ANNUAL COLLEGE TECH FEST"
              content={[
                "Won cash prize of Rs 22,000 in a team of 4 members in our annual technical events where we made working bots and compete with other bots ",
              ]}
            />
            <Resumecontent
              title="Intra-Collegiate Cricket Tournament"
              content={[
                "Won first place at Intra-Collegiate Cricket Tournament",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title=" FULL STACK WEB DEVELOPMENT - Full Time  [ MASAI SCHOOL ] "
              date="APR 2021 - DEC 2021"
              content={[
                "1300+ hours of hands-on coding experience.",
                " Solved 300+ Data Structure & Algorithm problems.",
                "Received 100+ hours of Soft Skills training.",
              ]}
            />
            <Resumecontent
              title=" B.Tech ELECTRONICS & COMMUNICATION ENGINEERING  [ NIT MEGHALAYA ] "
              date="2016 - 2020"
              content={["CGPA: 8.94 First Class With Distinction "]}
            />
            <Resumecontent
              title="12TH BOARD [ KENDRIYA VIDYALAYA, Bhubaneswar, Odisha ]"
              date="2015 - 2016"
              content={["Precentage: 90%"]}
            />
            <Resumecontent
              title="10TH BOARD [ KENDRIYA VIDYALAYA, Bhubaneswar, Odisha ] "
              date="2013 - 2014"
              content={["CGPA: 10"]}
            />
            {/* <h3 className="resume-title">Ranks and Achivements</h3> */}
            {/* <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-right"
        >
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
