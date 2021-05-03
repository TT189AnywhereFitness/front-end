import React, { useState } from "react";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";
import ClassDetail from "./ClassDetail";
import { FlexRowDiv } from "./styled";

const Search = (props) => {
  const { classList } = props;
  const [filter, setFilter] = useState(null);
  const handleSearchFilter = (val) => {
    setFilter(val)
  };
  return (
    <div>
      <FlexRowDiv.End>
        {/* dropdown for search type */}
        <DropdownButton onChange={e => console.log(e)} title="search_filter">
          <Dropdown.Item onSelect={() => handleSearchFilter("Duration")} >
            Duration
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => handleSearchFilter("Instructor")} >
            Instructor
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => handleSearchFilter("Day")} >
            Day
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => handleSearchFilter("Difficulty")} >
            Difficulty
          </Dropdown.Item>
        </DropdownButton>
        {/* form depending on search type */}
      </FlexRowDiv.End>
      {/* Duration search */}
      <FlexRowDiv.End>
        {filter === "Duration" ? <Form>Duration</Form> : null}
      </FlexRowDiv.End>
      <FlexRowDiv.Center>
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
          <div>Loading...</div>
        )}
      </FlexRowDiv.Center>
    </div>
  );
};

export default Search;
