import React, { useState } from "react";
import SinglePupil from "../components/StudentModel";
import { TextField } from "@mui/material";
import { useForm } from "../utils/hooks";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_STUDENT } from "../graphql";
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
const Button = styled.div`
  background: red;
  margin-top: 10px;
  border-radius: 20px;
  min-width: 15vw;
  color: white;
  padding: 10px;
  width: fit-content;
  cursor: pointer;
`;
const Modal = styled.div`
  margin: 3%;
  height: 60vh;
  width: 70vw;
  text-align: center;
  color: white;
  border-radius: 30px;
  background: #0908080c;
`;
const ModalButtom = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
`;
export default function SearchStudent() {
  const [searchInput, setSearchInput] = useState("");
  const [open, setopen] = useState(true);

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };
  const { data } = useQuery(GET_STUDENT, {
    variables: { otherNames: searchInput },
  });

  const onSearch = () => {};
  return (
    <>
      {data && (
        <Link
          to={`/students/${data?.getStudent.admissionNumber}`}
          key={data?.getStudent.admissionNumber}
        >
          <SinglePupil student={data?.getStudent} />;
        </Link>
      )}
      {open && (
        <Modal>
          <br />
          <TextField
            onChange={onChange}
            name="otherNames"
            value={searchInput}
            style={{
              background: "white",
            }}
            label="Other Names"
            variant="outlined"
          />
          <ModalButtom>
            <Link to="/students">
              <Button>Close</Button>
            </Link>

            <Button onClick={onSearch} style={{ background: "green" }}>
              Search Pupil
            </Button>
          </ModalButtom>
        </Modal>
      )}
    </>
  );
}
