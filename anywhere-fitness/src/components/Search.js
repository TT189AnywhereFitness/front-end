import React, { useState } from "react";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";
import ClassDetail from "./ClassDetail";
import { FlexRowDiv } from "./styled";

const Search = (props) => {
  const { classList } = props;
  const [filter, setFilter] = useState(null);
  const handleSearchFilter = (val) => {
    setFilter(val);
  };
  return (
    <div>
      {/* create toggle group for filter criteria instead of dropdown to allow for multiple filters */}
      <Form>
        <FlexRowDiv.Between>
          <Form.Check type="switch" label={"Duration"} />
          <FlexRowDiv.Center>
            {filter === "Duration"
              ? [
                  "Under half an hour",
                  "Half hour to an hour",
                  "1-2 Hours",
                ].map((selection, index) => (
                  <Form.Check
                    key={`${index}_${selection}`}
                    type="checkbox"
                    id={`${selection}`}
                    label={`${selection}`}
                  />
                ))
              : null}
          </FlexRowDiv.Center>
        </FlexRowDiv.Between>
        <FlexRowDiv.Between>
          <Form.Check type="switch" label={"Instructor"} />
        </FlexRowDiv.Between>
        <FlexRowDiv.Between>
          <Form.Check type="switch" label={"Day"} />
        </FlexRowDiv.Between>
        <FlexRowDiv.Between>
          <Form.Check type="switch" label={"Difficulty"} />
        </FlexRowDiv.Between>
      </Form>

      {/* show selected form section if that radio button is selected */}
      {/* Duration search */}
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
