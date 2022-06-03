import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";

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
  font-size: x-large;
  justify-items: center;
`;
const Icon = styled.span`
  margin-right: 2px;
`;

const Students = () => {
  return (
    <>
      <Container>

        <DialBox>
          <Link to="/search">
            <Text>
              <Icon>
                <PersonIcon />
              </Icon>
              Get Pupil
            </Text>
          </Link>
        </DialBox>

        <DialBox>
          <Link to="/allPupils">
            <Text>
              <Icon>
                <PeopleIcon />
              </Icon>
              Get All Pupil
            </Text>
          </Link>
        </DialBox>
      </Container>
    </>
  );
};

export default Students;
