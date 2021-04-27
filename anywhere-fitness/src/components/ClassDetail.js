import React from "react";

const ClassDetail = (props) => {
  const { name, description, imageURL, alt } = props;
  return (
    <div id="classDetail">
      <h1>{name}</h1>
      <img src={imageURL} alt={alt} />
      <p>{description}</p>
    </div>
  );
};

export default ClassDetail;
