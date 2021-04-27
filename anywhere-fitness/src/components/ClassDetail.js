import React from "react";

const ClassDetail = (props) => {
  const {name, description} = props;
  return <div id="classDetail">
    <h1>{name}</h1>
    <p>{description}</p>
  </div>;
};

export default ClassDetail;
