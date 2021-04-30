/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import ClassDetail from "./ClassDetail";
import { rootURL } from "../constants";
import axios from 'axios'
import styled from "styled-components";

const homeStyle = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-around",
  alignItems: "stretch"
};

const classDetail = {
  url:
    "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hurdle_-_The_Noun_Project.svg",
  alt:
    "hurdle SVG by James VanDyke, CC0, via Wikimedia Commons",
  style: {
    width: "450px",
    minWidth: "280px",
    maxWidth: "80vw",
    borderRadius: "12px",
    marginTop: "1rem",
    boxShadow: "3px 3px 5px 6px #ccc",
  },
};

// to simulate network load time
const fakeDelayDuration = 1500;

const Home = (props) => {
  const dummyClassList = [
    {
      "class_id": 1,
      "class_name": "Zumba",
      "type": "dance",
      "start_time": "12:00 PM",
      "duration": "60",
      "occasion": "weekly",
      "day": "Friday",
      "intensity": "low-high",
      "location": "online",
      "max_size": "32",
      "instructor": "Paula O"
  },
  ];

  const [classList, setClassList] = useState(null);

  useEffect(() => {

    axios.get(`${rootURL}`, (res)=>console.log(res))

    const fakeDelay = setTimeout(() => {
      Promise.resolve()
        .then(() => setClassList(dummyClassList))
        .catch((err) => console.error(err));
    }, fakeDelayDuration);

    return () => clearTimeout(fakeDelay);
  }, []);

  return (
    <div className="home">
      <Jumbotron>
          <h1>Welcome Back!</h1>
          <StyledDiv>
          <p>These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing.</p>

          <p>While you could use several mobile apps to accomplish this, **AnywhereFitness** is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. </p>

          <p>Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.</p>
          </StyledDiv>
      </Jumbotron>
      <Container style={homeStyle}>
        {classList ? (
          classList.map((listItem, index) => (
            <ClassDetail
              key={index}
              style={classDetail.style}
              class_id={listItem.class_id}
              class_name={listItem.class_name}
              type={listItem.type}
              start_time={listItem.start_time}
              duration={listItem.duration}
              occasion={listItem.occasion}
              day={listItem.day}
              intensity={listItem.intensity}
              location={listItem.location}
              max_size={listItem.max_size}
              instructor={listItem.instructor}              
            />
          ))
        ) : (
          <div className="loading">
            <h2>Getting list of classes...</h2>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home;

const StyledDiv = styled.div `
  width: 50%;
  font-size: 1rem;
`