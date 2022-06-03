import  React from "react";

import SinglePupil from "../components/StudentModel";



import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_STUDENTS } from "../graphql";

export default function AllPupils() {

  const { loading, error, data } = useQuery(GET_STUDENTS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
 
    

  
  // Display all pupils
  const students = data.getStudents.map((student) => {
    return (
      <div key={student.admissionNumber}>
        <Link
          to={`/students/${student.admissionNumber}`}
        >
          <SinglePupil student={student} />;
        </Link>
      </div>
    );
  });
  return students;
}
