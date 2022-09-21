import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
// import styled from "@emotion/styled";

import '../styles/classes.css'

import { TextField,  Modal, Button, Grid, Paper, Box } from "@mui/material";

import { useQuery, useMutation } from "@apollo/client";
import { GET_CLASS_OF_STUDENT, PROMOTE_STUDENTS } from "../graphql";
import { ClassContext } from "../utils/RouteHandler";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "space-around",
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// const Modal = styled.div`
//   margin: 3%;
//   height: 40vh;
//   width: 70vw;
//   text-align: center;
//   color: white;
//   border-radius: 30px;
//   background: #0908080c;
// `;
// const ModalButtom = styled.div`
//   margin-top: auto;
//   display: flex;
//   justify-content: space-between;
//   margin-left: 5%;
//   margin-right: 5%;
// `;

const Classes = () => {
  const [promoteToggle, setPromoteToggle] = useState(false);
  const [newClass, setNewClass] = useState("");
  const [oldClass, setOldClass] = useState("");

  const [editToggle, setEditToggle] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { studentClass } = useContext(ClassContext);

  const onEdit = () => {
    setEditToggle(!editToggle);
  };
  const onInputNewClass = (e) => {
    setNewClass(e.target.value);
    console.log(newClass);
  };

  const onInputOldClass = (e) => {
    setOldClass(e.target.value);
    console.log(oldClass);
  };
  // promote student
  const [promoteStudents] = useMutation(PROMOTE_STUDENTS, {
    variables: {
      oldClass: oldClass,
      newClass: newClass,
    },
  });
  const promoteStudentsCallback =()=>{
    try{
     promoteStudents()
    console.log("Students promoted successfully”)
    } catch (error){
      console.log(error)
     }
    
   };
  const { loading, error, data } = useQuery(GET_CLASS_OF_STUDENT, {
    variables: { classNumber: studentClass },
  });
  if (loading) return "Loading...";

  let balances = data?.getClassOfStudents.map((student) => student.balance);

  let debtors = data?.getClassOfStudents.map((student) => {
    return student.cleared === false ? student : "No debtor in this class";
  });

  const outstandingBalance = balances?.reduce((a, b) => a + b);
  const debtorsList = debtors?.map((student) => {
    return student.cleared === false ? (
      <Item key={student.admissionNumber}>
        <p>
          {student.surname} {student.otherNames}
        </p>
        <p>#{student.balance}</p>
      </Item>
    ) : null;
  });

  if (error) return `Error! ${error.message}`;

  return (
    <div style={{ marginTop: 80 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <h2 style={{ textAlign: "center" }}> {studentClass} Debtors List </h2>

        <Button
          variant="contained"
          style={{ backgroundColor: "#FF1450" }}
          onClick={handleOpen}
        >
          Promote pupils to a new class
        </Button>
      </div>
      <Box sx={{ flexGrow: 1, mt: 7 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {debtorsList}
            <Item>
              <b>Total:</b>
              <b>#{outstandingBalance}</b>
            </Item>
            <Link to={`/${studentClass}/printdebtorslist`}>
              <Item>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#FF1450" }}
                >
                  Print debtors list
                </Button>
              </Item>
            </Link>
          </Grid>
        </Grid>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            name="newClass"
            onChange={onInputNewClass}
            value={newClass}
            label="New Class"
            variant="outlined"
            required
          />
          <div>
            <Button
              onClick={handleClose}
              style={{
                background: "red",
                color: "white",
                marginRight: "28px",
                marginTop: "10px",
              }}
            >
              Close
            </Button>
            <Button
              onClick={promoteStudentsCallback}
              style={{ background: "green", color: "white", marginTop: "10px" }}
            >
              Promote
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Classes;
