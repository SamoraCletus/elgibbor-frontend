import React from "react";
import { useState } from "react";
import SinglePupil from "../components/StudentModel";
import { Link } from "react-router-dom";
import "../styles/displayPupils.css";

import { useQuery } from "@apollo/client";
import { GET_STUDENTS } from "../graphql";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const DisplayPupils = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [filterStudent, setFilterStudent] = useState([]);
  const { data } = useQuery(GET_STUDENTS);
 
  const handleSearch = (e) => {
    setSearchFilter(e.target.value);
    e.preventDefault();
    const { getStudents } = data;
    const newFilter = getStudents.filter((value) => {
      return value.surname
        .toLowerCase()
        .includes(searchFilter.toLowerCase());
    });
    setFilterStudent(newFilter);
  };

  return (
    <div className="displayPupil">
      <Box
        component="form"
        style={{ display: "flex", width: "80%", margin: "auto" }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search for pupil"
          variant="outlined"
          style={{ width: "80ch", marginRight: 15 }}
          type="search"
          onChange={handleSearch}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={handleSearch}
          style={{ backgroundColor: "#FF1450" }}
        >
          Search
        </Button>
      </Box>
      {data &&
        filterStudent.length === 0 &&
        data.getStudents.map((student) => (
          <div key={student.admissionNumber}>
            <Link to={`/students/${student.admissionNumber}`}>
              <SinglePupil student={student} />;
            </Link>
          </div>
        ))}
      {filterStudent &&
        filterStudent.map((student) => (
          <div key={student.admissionNumber}>
            <Link to={`/students/${student.admissionNumber}`}>
              <SinglePupil student={student} />;
            </Link>
          </div>
        ))}
    </div>

    
  );
};

export default DisplayPupils;
