import React from "react";
import { PupilProfile } from "../components/StudentModel";
import {
  SinglePupilExtra,
  SinglePupilBottom,
} from "../components/StudentModel";
import { useQuery } from "@apollo/client";
import { GET_STUDENT_BY_NUMBER } from "../graphql";
import styled from "@emotion/styled";

const Container = styled.div`
  height: fit-content;
  width: 80%;
  padding: 1%;
  border: 1px solid black;
  border-radius: 20px;
  margin: auto;
  margin-top: 0.5%;
  color: black;
`;
const Title = styled.h4`
  font-size: large;
  text-align: center;
  text-decoration: underline;
  margin-bottom: 1%;
`;
export default function StudentProfile() {
  const pathname = window.location.pathname;
  let searchNumber = pathname.slice(10);
  const { loading, error, data } = useQuery(GET_STUDENT_BY_NUMBER, {
    variables: { admissionNumber: searchNumber },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const { paymentHistory } = data?.getStudentByNumber;
  const StudentHistory = paymentHistory.map((history) => {
    return <SinglePupilExtra key={Math.random()} history={history} />;
  });
  console.log(data?.getStudentByNumber.otherNames);
  return (
    <div style={{ marginTop: 70}}>
      <PupilProfile student={data?.getStudentByNumber} />
      <Container>
        <Title>Transaction History</Title>
        {StudentHistory}
      </Container>
      <SinglePupilBottom otherNames={data?.getStudentByNumber.otherNames} admissionNumber={data?.getStudentByNumber.admissionNumber} />
    </div>
  );
}
