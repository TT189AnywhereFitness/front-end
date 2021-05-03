import React, { useEffect, useState } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import ClassDetail from "./ClassDetail";
import { dummyClassList } from "../constants";
import { JumboP } from "./styled";

const homeStyle = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-around",
  alignItems: "stretch",
};

// to simulate network load time
const fakeDelayDuration = 1500;

const Home = () => {
  const [classList, setClassList] = useState(null);

  useEffect(() => {
    const fakeDelay = setTimeout(() => {// replace with axios request
      Promise.resolve()
        .then(() => setClassList(dummyClassList))
        .catch((err) => console.error(err));
    }, fakeDelayDuration);

    return () => clearTimeout(fakeDelay);// remove after replacing FakeDelay with axios request
  }, []);

  return (
    <div className="home">
      <Jumbotron>
        <h1>Welcome Back!</h1>
        <JumboP>
          These days, fitness classes can be held anywhere- a park, an
          unfinished basement or a garage- not just at a traditional gym.
          Certified fitness instructors need an easy way to take the awkwardness
          out of attendance taking and client payment processing.
        </JumboP>

        <JumboP>
          While you could use several mobile apps to accomplish this,
          **AnywhereFitness** is the all-in-one solution to meet your
          “on-location” fitness class needs. AnywhereFitness makes it painless
          for Instructors and Clients alike to hold and attend Fitness classes
          wherever they might be held.
        </JumboP>

        <JumboP>
          Instructors can take attendance, request and process payments, create
          virtual “punch passes” for each type of class offered, alert clients
          of cancellations or location changes and so much more. Clients can
          easily find out information on classes - location, class size, start
          time and duration, as well as reschedule or cancel an upcoming
          appointment or reservation right from the mobile app.
        </JumboP>
      </Jumbotron>
      <Container style={homeStyle}>
        {classList ? (
          classList.map((listItem, index) => (
            <ClassDetail
              key={index}
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
