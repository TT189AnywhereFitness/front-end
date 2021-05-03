import React, { useState } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import ClassDetail from "./ClassDetail";
import { FlexRowDiv } from "./styled";

const Search = (props) => {
  const { classList } = props;

  const initialFilters = {
    Duration: false,
    Instructor: false,
    Day: false,
    Difficulty: false,
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleChange = (e) => console.log(e);

  const handleSubmit = (e) => console.log(e);

  return (
    <div>
      {/* create toggle group for filter criteria instead of dropdown to allow for multiple filters */}

      {/* show selected form section if the corresponding switch is toggled */}
      <Form onChange={handleChange} onSubmit={handleSubmit}>
        <FlexRowDiv.Between>
          <Form.Check
            type="switch"
            label={"Duration"}
            onChange={handleChange}
          />
          <FlexRowDiv.Center>
            {filters.Duration ? (
              [
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
            ) : (
              <p> </p>
            )}
          </FlexRowDiv.Center>
        </FlexRowDiv.Between>
        <FlexRowDiv.Between>
          <Form.Check type="switch" label={"Instructor"} />
          <FlexRowDiv.Start>
            {filters.Instructor ? (
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon3">
                    Instructor Name
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="instructor-name"
                  aria-describedby="basic-addon3"
                />
              </InputGroup>
            ) : (
              <p> </p>
            )}
          </FlexRowDiv.Start>
        </FlexRowDiv.Between>
        <FlexRowDiv.Between>
          <Form.Check type="switch" label={"Day"} />
        </FlexRowDiv.Between>
        <FlexRowDiv.Between>
          <Form.Check type="switch" label={"Difficulty"} />
        </FlexRowDiv.Between>
        <FlexRowDiv.End>
          <Button
            type="submit"
            // eslint-disable-next-line eqeqeq
            variant="success"
          >
            Find Classes
          </Button>
        </FlexRowDiv.End>
      </Form>

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
