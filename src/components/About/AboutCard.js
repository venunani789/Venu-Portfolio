import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Venu Koduru </span>
            from <span className="purple">Chicago,Illinois.</span>
            <br />
            I am currently looking for new opprtunities.
            <br />
            I have completed Masters in Computer Science at Governors State University.
            <br />
            Currently i'm working as React/.Net developer at Morgan Stanley and my contract 
            is going to end in couple of weeks.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Pencil Art
            </li>
            <li className="about-activity">
              <ImPointRight /> Yoga
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best revenge is to improve your self!"{" "}
          </p>
          <footer className="blockquote-footer">Venu Koduru</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
