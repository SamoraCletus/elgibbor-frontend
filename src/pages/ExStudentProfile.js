import React from "react";
import SinglePupil from "../components/StudentModel";
import {
  SinglePupilExtra,
  SinglePupilBottom,
} from "../components/StudentModel";
import { useQuery } from "@apollo/client";
import { GET_EXSTUDENT } from "../graphql";

export default function EXStudentProfile() {
  let searchInput = "Edidiong Pattrick";
  const { loading, error, data } = useQuery(GET_EXSTUDENT, {
    variables: { otherNames: searchInput },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return (
    <>
      <SinglePupil />
      <SinglePupilExtra />
      <SinglePupilBottom />
    </>
  );
}

// date, term, academicSession, amount;
