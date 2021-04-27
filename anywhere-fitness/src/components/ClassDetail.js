import React from "react";
import { Card } from "react-bootstrap";

const ClassDetail = (props) => {
  const { name, description, imageURL, alt, style } = props;
  return (
    <Card style={style}>
      <Card.Img variant="top" src={imageURL} alt={alt} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ClassDetail;
