import React from "react";
import SinglePupil from "../components/StudentModel";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_EXSTUDENTS } from "../graphql";

export default function AllExPulpils() {
  const { loading, error, data } = useQuery(GET_EXSTUDENTS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const exStudents = data.getExStudents.map((exStudent) => {
    return (
      <Link
        to={`/students/${exStudent.otherNames}`}
        key={exStudent.admissionNumber}
      >
        <SinglePupil student={exStudent} />;
      </Link>
    );
  });
  return exStudents;
}
