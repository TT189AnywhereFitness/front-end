import React from "react";
import { Badge, Button, Card, Table } from "react-bootstrap";

const ClassDetail = (props) => {
  const {
    class_id,
    class_name,
    type,
    start_time,
    duration,
    occasion,
    day,
    intensity,
    location,
    max_size,
    instructor } = props;
  return (
    <Card style={{
      width: "450px",
      minWidth: "280px",
      maxWidth: "80vw",
      borderRadius: "12px",
      marginTop: "1rem",
      boxShadow: "3px 3px 5px 6px #ccc",
    }}>
    <Card.Body>
      <Card.Title>{class_name}</Card.Title>
      <Card.Subtitle>{type}<Badge>{intensity}</Badge></Card.Subtitle>
      <Card.Text>Led by {instructor}</Card.Text>
        <Table>
            <thead></thead>
          <tbody>
            <tr>
            <td>Start Time</td><td>{start_time}</td>
          </tr>
          <tr>
            <td>Duration</td><td>{duration}</td>
          </tr>
          <tr>
            <td>Location</td><td>{location}</td>
          </tr>
          <tr>
            <td>Day</td><td>{day}</td>
          </tr>
          <tr>
            <td>Maximum Class Size</td><td>{max_size}</td>
          </tr>
          <tr>
            <td>Occasion</td><td>{occasion}</td>
          </tr>
          <tr>
            <td>Class ID</td><td>{class_id}</td>
          </tr>
          </tbody>
        </Table>
        <Button variant="primary" block >Sign Up!</Button>
      </Card.Body>
    </Card>
  );
};

export default ClassDetail;
