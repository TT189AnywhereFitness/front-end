/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import ClassDetail from "./ClassDetail";

const homeStyle = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-around",
  alignItems: "stretch"
};

const classDetail = {
  url:
    "https://www.pikpng.com/pngl/m/65-657436_student-royalty-free-class-clip-art-class-clipart.png",
  alt:
    "Student Royalty-free Class Clip Art - Class Clipart - Png Download@pikpng.com",
  style: {
    width: "450px",
    minWidth: "280px",
    maxWidth: "80vw",
    border: "1px solid black",
    borderRadius: "12px",
    marginTop: "1rem",
  },
};

// to simulate network load time
const fakeDelayDuration = 1500;

const Home = (props) => {
  const dummyClassList = [
    {
      name: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Arcu vitae elementum curabitur vitae nunc. Enim ut tellus elementum sagittis vitae et leo. Enim diam vulputate ut pharetra sit amet aliquam. Morbi tristique senectus et netus et malesuada. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Orci ac auctor augue mauris augue. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Parturient montes nascetur ridiculus mus.",
      imageURL: "",
    },
    {
      name: "Hipster Ipsum ",
      description:
        "Bespoke bicycle rights master cleanse selvage street art, pitchfork pork belly taiyaki pinterest activated charcoal small batch offal. Dreamcatcher next level tattooed listicle vice deep v PBR&B locavore intelligentsia normcore. Kitsch literally knausgaard, migas roof party tacos viral banjo copper mug kinfolk chambray direct trade iceland YOLO hexagon. Crucifix intelligentsia microdosing quinoa, truffaut kale chips hexagon chartreuse seitan pabst fam.",
    },
    {
      name: "Bacon Ipsum",
      description:
        "Spicy jalapeno biltong tongue bacon turducken chuck prosciutto shoulder spare ribs tenderloin beef ribs chislic alcatra corned beef hamburger. Spare ribs sausage bacon ham, chuck burgdoggen beef ribs ham hock pig frankfurter. Bresaola corned beef salami chicken, porchetta ham pork chop turkey bacon spare ribs cupim pastrami short loin biltong. Leberkas pork chop tri-tip jerky, andouille rump beef sirloin sausage shankle hamburger tail cow.",
    },
    {
      name: "Delorean Ipsum",
      description:
        "I'm too loud. I can't believe it. I'm never gonna get a chance to play in front of anybody. Watch it, Goldie. Oh. Ah well, sort of. You know Marty, I'm gonna be very sad to see you go. You've really mad a difference in my life, you've given me something to shoot for. Just knowing, that I'm gonna be around to se 1985, that I'm gonna succeed in this. That I'm gonna have a chance to travel through time. It's going to be really hard waiting 30 years before I could talk to you about everything that's happened in the past few days. I'm really gonna miss you, Marty.",
    },
    {
      name: "Busey Ipsum",
      description:
        "Busey ipsum dolor sit amet. These kind of things only happen for the first time once.It's good to yell at people and tell people that you're from Tennesee, so that way you'll be safe.The best way to communicate is compatible. Compatible communication is listening with open ears and an open mind, and not being fearful or judgemental about what you're hearing.",
    },
    {
      name: "Samuel L Ipsum",
      description:
        "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
    },
    {
      name: "Kitty Ipsum",
      description:
        "Chase ball of string eat plants, meow, and throw up because I ate plants going to catch the red dot today going to catch the red dot today. I could pee on this if I had the energy. Chew iPad power cord steal the warm chair right after you get up for purr for no reason leave hair everywhere, decide to want nothing to do with my owner today.",
    },
  ];

  const [classList, setClassList] = useState(null);

  useEffect(() => {
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
          <p>Tempor orci eu lobortis elementum nibh tellus molestie nunc.</p>
      </Jumbotron>
      <Container style={homeStyle}>
        {classList ? (
          classList.map((listItem, index) => (
            <ClassDetail
              key={index}
              name={listItem.name}
              description={listItem.description}
              imageURL={classDetail.url}
              alt={classDetail.alt}
              style={classDetail.style}
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
