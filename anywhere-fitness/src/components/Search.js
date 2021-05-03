import React from "react";
import ClassDetail from "./ClassDetail";
import { FlexRowDiv } from "./styled";

const Search = (props) => {
  const { classList } = props;
  return (
    <FlexRowDiv>
      {classList.map((listItem, index) => (
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
      ))}
    </FlexRowDiv>
  );
};

export default Search;
