import { gql } from "@apollo/client";

const GET_STUDENTS = gql`
  query getStudents {
    getStudents {
      surname
      otherNames
      schoolFees
      balance
      studentClass
      DOB
      stateOfOrigin
      LGA
      gender
      guardianName
      guardianPhone
      permAddress
      paymentHistory {
        date
        term
        academicSession
        amount
      }
      cleared
      admissionNumber
    }
  }
`;
const GET_EXSTUDENTS = gql`
  query GetExStudents {
    getExStudents {
      surname
      otherNames
      schoolFees
      balance
      studentClass
      DOB
      stateOfOrigin
      LGA
      gender
      guardianName
      guardianPhone
      permAddress
      paymentHistory {
        date
        term
        academicSession
        amount
      }
      admissionNumber
      yearOfWithdrawal
    }
  }
`;
const GET_STUDENT = gql`
  query GetStudent($otherNames: String!) {
    getStudent(otherNames: $otherNames) {
      surname
      otherNames
      schoolFees
      balance
      studentClass
      DOB
      stateOfOrigin
      LGA
      gender
      guardianName
      guardianPhone
      permAddress
      paymentHistory {
        date
        term
        academicSession
        amount
      }
      cleared
      admissionNumber
    }
  }
`;
const GET_STUDENT_BY_NUMBER = gql`
  query GetStudentByNumber($admissionNumber: String!) {
    getStudentByNumber(admissionNumber: $admissionNumber) {
      surname
      otherNames
      schoolFees
      balance
      studentClass
      DOB
      stateOfOrigin
      LGA
      gender
      guardianName
      guardianPhone
      permAddress
      paymentHistory {
        date
        term
        academicSession
        amount
      }
      cleared
      admissionNumber
    }
  }
`;
const GET_EXSTUDENT = gql`
  query GetExStudent($otherNames: String!) {
    getExStudent(otherNames: $otherNames) {
      surname
      otherNames
      schoolFees
      balance
      studentClass
      DOB
      stateOfOrigin
      LGA
      gender
      guardianName
      guardianPhone
      permAddress
      paymentHistory {
        date
        term
        academicSession
        amount
      }
      admissionNumber
      yearOfWithdrawal
    }
  }
`;
const GET_CLASS_OF_STUDENT = gql`
  query GetClassOfStudents($classNumber: ID!) {
    getClassOfStudents(classNumber: $classNumber) {
      surname
      otherNames
      schoolFees
      balance
      studentClass
      DOB
      stateOfOrigin
      LGA
      gender
      guardianName
      guardianPhone
      permAddress
      paymentHistory {
        date
        term
        academicSession
        amount
      }
      cleared
      admissionNumber
    }
  }
`;
const REGISTER_STUDENT = gql`
  mutation RegisterStudent(
    $registerInput: RegisterInput! # $surname: String!
  ) {
    registerStudent(registerInput: $registerInput) {
      surname
      studentClass
      stateOfOrigin
      schoolFees
      permAddress
      paymentHistory {
        term
        date
        amount
        academicSession
      }
      otherNames
      guardianPhone
      guardianName
      gender
      cleared
      balance
      admissionNumber
      LGA
      DOB
    }
  }
`;
const EDIT_STUDENT = gql`
  mutation editStudent(
    $surname: String
    $otherNames: String
    $schoolFees: Int
    $studentClass: String
    $DOB: String
    $stateOfOrigin: String
    $LGA: String
    $gender: String
    $guardianName: String
    $guardianPhone: String
    $permAddress: String
    $admissionNumber: String
  ) {
    editStudent(
      editInput: {
        surname: $surname
        otherNames: $otherNames
        schoolFees: $schoolFees
        studentClass: $studentClass
        DOB: $DOB
        stateOfOrigin: $stateOfOrigin
        LGA: $LGA
        gender: $gender
        guardianName: $guardianName
        guardianPhone: $guardianPhone
        permAddress: $permAddress
        admissionNumber: $admissionNumber
      }
    ) {
      surname
      otherNames
      schoolFees
      balance
      studentClass
      DOB
      stateOfOrigin
      LGA
      gender
      guardianName
      guardianPhone
      permAddress
      paymentHistory {
        date
        term
        academicSession
        amount
      }
      cleared
      admissionNumber
    }
  }
`;
const EDIT_PAYMENT = gql`
  mutation EditPayment($paymentInput: PaymentInput!) {
    editPayment(paymentInput: $paymentInput) {
      surname
      otherNames
      schoolFees
      balance
      studentClass
      DOB
      stateOfOrigin
      LGA
      gender
      guardianName
      guardianPhone
      permAddress
      paymentHistory {
        date
        term
        academicSession
        amount
      }
      cleared
      admissionNumber
    }
  }
`;

const WITHDRAW_STUDENT = gql`
  mutation withdrawStudent($admissionNumber: String!) {
    withdrawStudent(admissionNumber: $admissionNumber)
  }
`;
const DEMOTE_STUDENT = gql`
  mutation demoteStudent($admissionNumber: String!, $newClass: String!) {
    demoteStudent(admissionNumber: $admissionNumber, newclass: $newclass)
  }
`;
const PROMOTE_STUDENTS = gql`
  mutation promoteStudents($oldClass: String!, $newClass: String!) {
    promoteStudents(oldClass: $oldClass, newclass: $newclass)
  }
`;
const SET_SCHOOLFEES = gql`
  mutation setSchoolfee($amount: Int!, $studentClass: String!) {
    setSchoolfee(studentClass: $studentClass, amount: $amount)
  }
`;
const ADMIN_LOGIN = gql`
  mutation adminLogin($username: String!, $password: String!) {
    adminLogin(password: $password, username: $username) {
      username
      password
      token
    }
  }
`;

export {
  GET_EXSTUDENTS,
  GET_STUDENTS,
  GET_STUDENT,
  GET_STUDENT_BY_NUMBER,
  GET_EXSTUDENT,
  GET_CLASS_OF_STUDENT,
  REGISTER_STUDENT,
  PROMOTE_STUDENTS,
  DEMOTE_STUDENT,
  EDIT_STUDENT,
  EDIT_PAYMENT,
  WITHDRAW_STUDENT,
  SET_SCHOOLFEES,
  ADMIN_LOGIN,
};
