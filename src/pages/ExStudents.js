import styled from "@emotion/styled";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

const Container = styled.div`
  margin-top: 2%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  justify-content: space-evenly;
  border: 5px solid black;
  height: 40vh;
`;
const DialBox = styled.div`
  margin-top: 5%;
  width: 17vw;
  height: 17vh;
  border-radius: 20px;
  border: 2px solid black;
  padding: 2%;
  background: #40fe;
  display: flex;
  :hover {
    background: blue;
    border: 4px solid black;
  }
`;
const Text = styled.h4`
  color: white;
  font-size: larger;
  justify-items: center;
`;
const Icon = styled.span`
  margin-right: 2px;
`;
const Button = styled.div`
  background: red;
  margin-top: 2%;
  border-radius: 20px;
  min-width: 15vw;
  color: white;
  padding: 2%;
  width: fit-content;
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
const ExStudents = () => {
  const [open, setopen] = useState(false);
  const onModal = () => {
    setopen(!open);
  };

  return (
    <>
      {!open && (
        <Container>
          <DialBox onClick={onModal}>
            <Text>
              <Icon>
                <PersonIcon />
              </Icon>
              Get ExStudent
            </Text>
          </DialBox>
          <DialBox>
            <Link to="/allExPupils">
              <Text>
                <Icon>
                  <PersonIcon />
                </Icon>
                Get All ExStudents
              </Text>
            </Link>
          </DialBox>
        </Container>
      )}

      {open && (
        <Modal>
          <br />
          <TextField
            style={{
              background: "white",
              width: "40vw",
            }}
            label="Other Names"
            variant="outlined"
          />
          <ModalButtom>
            <Button onClick={onModal}>Close</Button>
            <Button onClick={onModal} style={{ background: "green" }}>
              Search Pupil
            </Button>
          </ModalButtom>
        </Modal>
      )}
    </>
  );
};

export default ExStudents;
