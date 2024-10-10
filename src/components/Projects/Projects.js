import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Heart from "../../Assets/Projects/HeartDisease.png";
import Book from "../../Assets/Projects/E-Commerce.png";
import SAMC from "../../Assets/Projects/SevenbridgeAMC.png";
import SMG from "../../Assets/Projects/Suburban medical Group.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Heart}
              isBlog={false}
              title="Heart Disease Detection"
              description="This is my Capstone project build with Python.We use four Alogorithms to get accurate data where heart disease is present or absent"
              ghLink="https://github.com/venunani789/HeartDiseaseDetechtion-1"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Book}
              isBlog={false}
              title="E-commerce website"
              description="This is my personal project built using asp.net core with identity network .I used .net frame work and entityframework .This is a e-commerce book store website where you can purchase different kinds of books"
              ghLink="https://github.com/venunani789/venumvc"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SAMC}
              isBlog={false}
              title="AMC"
              description="This is one of my project which i have done my masters.This project is based on AMC movie ticket booking platform"
              ghLink="https://github.com/venunani789/AMCTeater"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SMG}
              isBlog={false}
              title="Sub Urban Medical Group"
              description="This is one of my major project which i have done during my masters.This project is about patients who can book their appointments with physicians and enquire there medical problem through online."
              ghLink="https://github.com/venunani789/Suburban-Medical-Group"
             
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
