import React, { useState } from "react";
import styled from "@emotion/styled";
import VerifiedOutlined from "@mui/icons-material/VerifiedOutlined";
import DangerousOutlined from "@mui/icons-material/DangerousOutlined";
import { useForm } from "../utils/hooks";
import { TextField } from "@mui/material";
import { useMutation } from "@apollo/client";

import {
  DEMOTE_STUDENT,
  EDIT_PAYMENT,
 
  WITHDRAW_STUDENT,
} from "../graphql";
const Container = styled.div`
  height: fit-content;
  width: 80%;
  padding: 1%;
  border: 1px solid black;
  border-radius: 20px;
  margin: auto;
  margin-top: 3%;
  color: black;
`;
const Items = styled.div`
  display: flex;
`;
const Details = styled.div`
  width: 100%;
  margin-left: 1%;
`;
const Title = styled.h4`
  font-size: large;
  text-align: center;
  text-decoration: underline;
  margin-bottom: 1%;
`;
const ItemTitle = styled.h4`
  font-size: large;
  font-weight: bold;
  text-decoration: underline;
`;
const Field = styled.div`
  display: flex;
  align-items: center;
`;
const BoldText = styled.p`
  font-size: large;
  font-weight: bold;
`;
const Text = styled.p`
  font-size: large;
  margin-right: 1%;
`;
const Icon = styled.span`
  color: green;
`;
export function PupilProfile({
  student: {
    surname,
    otherNames,
    schoolFees,
    balance,
    studentClass,
    DOB,
    stateOfOrigin,
    LGA,
    gender,
    guardianName,
    guardianPhone,
    permAddress,
    cleared,
    admissionNumber,
  },
}) {
  return (
    <Container>
      <Items>
        <Details>
          <ItemTitle>BASIC DETAILS</ItemTitle>
          <Field>
            <Text>Surname:</Text>
            <BoldText>{surname}</BoldText>
          </Field>
          <Field>
            <Text>Othernames:</Text>
            <BoldText>{otherNames}</BoldText>
          </Field>

          <Field>
            <Text>Guardian Name:</Text>
            <BoldText>{guardianName}</BoldText>
          </Field>
          <Field>
            <Text>Guardian Phone:</Text>
            <BoldText>{guardianPhone}</BoldText>
          </Field>
          <Field>
            <Text>State of Origin:</Text>
            <BoldText>{stateOfOrigin}</BoldText>
          </Field>
          <Field>
            <Text>LGA:</Text>
            <BoldText>{LGA}</BoldText>
          </Field>
          <Field>
            <Text>Gender:</Text>
            <BoldText>{gender}</BoldText>
          </Field>
        </Details>

        <Details>
          <ItemTitle>OTHER DETAILS</ItemTitle>
          <Field>
            <Text>Admission Number:</Text>
            <BoldText>{admissionNumber}</BoldText>
          </Field>
          <Field>
            <Text>Student Class:</Text>
            <BoldText>{studentClass}</BoldText>
          </Field>

          <Field>
            <Text>School Fees:</Text>
            <BoldText>{schoolFees}</BoldText>
          </Field>
          <Field>
            <Text>Balance</Text>
            <BoldText>{balance}</BoldText>
          </Field>
          <Field>
            <Text>Date Of Birth:</Text>
            <BoldText>{DOB}</BoldText>
          </Field>
          <Field>
            <Text>Perm. Address:</Text>
            <BoldText>{permAddress}</BoldText>
          </Field>
          <Field>
            <Text>Cleared:</Text>
            <BoldText>
              <Icon>
                {cleared ? (
                  <VerifiedOutlined />
                ) : (
                  <DangerousOutlined color="error" />
                )}
              </Icon>
            </BoldText>
          </Field>
        </Details>
      </Items>
    </Container>
  );
}
export default function SinglePupil({
  student: { surname, otherNames, studentClass, admissionNumber },
}) {
  return (
    <Container>
      <Items>
        <Details>
          <Field>
            <Text>Name:</Text>
            <BoldText>
              {surname} {otherNames}
            </BoldText>
          </Field>
        </Details>

        <Details>
          <Field>
            <Text> Class:</Text>
            <BoldText>{studentClass}</BoldText>
          </Field>
        </Details>
      </Items>
    </Container>
  );
}

const Extra = styled.div`
  display: flex;
  justify-content: space-between;
`;
export function SinglePupilExtra({
  history: { date, term, academicSession, amount },
}) {
  return (
    <Extra>
      <Field>
        <Text>Date:</Text>
        <BoldText>{date}</BoldText>
      </Field>
      <Field>
        <Text>Term:</Text>
        <BoldText>{term}</BoldText>
      </Field>
      <Field>
        <Text>Session:</Text>
        <BoldText>{academicSession}</BoldText>
      </Field>
      <Field>
        <Text>Amount:</Text>
        <BoldText>{amount}</BoldText>
      </Field>
    </Extra>
  );
}
const Button = styled.div`
  background: red;
  margin-top: 2%;
  border-radius: 10px;
  min-width: 10vw;
  color: white;
  padding: 1%;
  width: fit-content;
  cursor: pointer;
`;
const Modal = styled.div`
  margin: 3%;
  height: 40vh;
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
export function SinglePupilBottom({ otherNames, admissionNumber }) {
  const [withdrawToggle, setWithdrawToggle] = useState(false);
  const [newClass, setNewClass] = useState("");
  const [promoteToggle, setPromoteToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [errors, setErrors] = useState({});
  const { onChange, onNumberChange, onSubmit, values, resetVales } = useForm(
    editPaymentCallback,
    {
      otherNames: otherNames,
      academicSession: "",
      term: "",
      amount: "",
    }
  );
  const [editPayment] = useMutation(EDIT_PAYMENT, {
    variables: { paymentInput: values },
    update() {
      setEditToggle(!editToggle);
      resetVales(values);
      alert("Payment Made Successfully");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0]?.extensions.exception.errors);
    },
  });
  function editPaymentCallback() {
    editPayment();
  }
  const [withdrawStudent] = useMutation(WITHDRAW_STUDENT, {
    variables: {
      admissionNumber: admissionNumber,
    },
  });
  const onInputNewClass = (e) => {
    setNewClass(e.target.value);
    console.log(newClass);
  };
  const [demoteStudent] = useMutation(DEMOTE_STUDENT, {
    variables: {
      admissionNumber: admissionNumber,
      newClass: newClass,
    },
  });
  const onPromote = () => {
    setPromoteToggle(!promoteToggle);
    setWithdrawToggle(false);
    setEditToggle(false);
  };
  const onWithdraw = () => {
    setWithdrawToggle(!withdrawToggle);
    setPromoteToggle(false);
    setEditToggle(false);
  };
  const onEdit = () => {
    setEditToggle(!editToggle);
    setPromoteToggle(false);
    setWithdrawToggle(false);
  };
  return (
    <>
      {!editToggle | promoteToggle | withdrawToggle && (
        <Container>
          <Title>Actions</Title>
          <Extra>
            <Button
              onClick={onEdit}
              style={{ background: "blue", textAlign: "center" }}
            >
              Make Payment
            </Button>
            <Button onClick={onWithdraw} style={{ textAlign: "center" }}>
              Withdraw Pupil
            </Button>
            <Button
              onClick={onPromote}
              style={{ background: "green", textAlign: "center" }}
            >
              Demote Student
            </Button>
          </Extra>
        </Container>
      )}

      {editToggle && (
        <Modal>
          <br />
          <TextField
            name="term"
            onChange={onChange}
            value={values.term}
            style={{
              background: "white",
            }}
            label="Term"
            variant="outlined"
          />
          <TextField
            name="academicSession"
            onChange={onChange}
            value={values.academicSession}
            style={{
              background: "white",
            }}
            label="Session"
            variant="outlined"
          />
          <TextField
            name="amount"
            type="number"
            onChange={onNumberChange}
            value={values.amount}
            style={{
              background: "white",
            }}
            label="Amount"
            variant="outlined"
          />
          <ModalButtom>
            <Button onClick={onEdit}>Close</Button>
            <Button onClick={onSubmit} style={{ background: "green" }}>
              Pay
            </Button>
          </ModalButtom>
        </Modal>
      )}
      {withdrawToggle && (
        <Modal>
          <br />
          <p style={{ color: "black" }}>
            Are you sure you want to withdraw student?
          </p>
          <ModalButtom>
            <Button onClick={onWithdraw}>No</Button>
            <Button onClick={withdrawStudent} style={{ background: "green" }}>
              Yes
            </Button>
          </ModalButtom>
        </Modal>
      )}

      {promoteToggle && (
        <Modal>
          <br />
          <TextField
            name="newClass"
            onChange={onInputNewClass}
            value={newClass}
            style={{
              background: "white",
            }}
            label="New Class"
            variant="outlined"
          />
          <ModalButtom>
            <Button onClick={demoteStudent}>Go back</Button>
            <Button onClick={onEdit} style={{ background: "green" }}>
              Promote
            </Button>
          </ModalButtom>
        </Modal>
      )}
    </>
  );
}
