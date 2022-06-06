import React from "react";
import "../styles/Newpupils.css";
import location from "../utils/location";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useMutation } from "@apollo/client";
import { REGISTER_STUDENT } from "../graphql";
import { useForm } from "../utils/hooks";

const Newpupil = () => {
  // const [area, setArea] = React.useState(0);
  // const [errors, setErrors] = React.useState({});

  const [values, setValues] = React.useState({
    surname: "",
    otherNames: "",
    studentClass: "",
    gender: "",
    DOB: "",
    permAddress: "",
    guardianName: "",
    guardianPhone: "",
    admissionNumber: "",
    schoolFees: "",
    stateOfOrigin: "",
    LGA: "",
  });

  const { onSubmit } = useForm(addStudentCallback);

  const [registerStudent] = useMutation(REGISTER_STUDENT, {
    variables: { registerInput: values },
    update() {
      alert("Student added Successfully");
    },
    // onError(err) {
    //   setErrors(err.graphQLErrors[0]?.extensions.exception.errors);
    // },
  });
  const onChange = (e) => {
    let value = e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };
  const onNumberChange = (e) => {
    let value = e.target.value;
    setValues({ ...values, [e.target.name]: JSON.parse(value) });
  };
  const onChangeClass = (e) => {
    setValues({ ...values, studentClass: e.target.value });
  };
  const onChangeState = (e) => {
    setValues({ ...values, stateOfOrigin: e.target.value });
  };
  const onLocalSelect = (e) => {
    setValues({ ...values, LGA: e.target.value });
  };
  const onGenderSelect = (e) => {
    setValues({ ...values, gender: e.target.value });
  };

  function addStudentCallback() {
    registerStudent();
    setValues({
      surname: "",
      otherNames: "",
      studentClass: "preNursery",
      gender: "",
      DOB: "",
      permAddress: "",
      guardianName: "",
      guardianPhone: "",
      admissionNumber: "",
      schoolFees: "",
      stateOfOrigin: "",
      LGA: "",
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Add New Pupil</h1>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "45ch", mr: 5, mt: 4 },
        }}
      >
        <TextField
          name="surname"
          value={values.surname}
          id="outlined-basic"
          label="Surname"
          variant="outlined"
          onChange={onChange}
          required
        />
        <TextField
          name="otherNames"
          id="outlined-basic"
          label="Other names"
          value={values.otherNames}
          variant="outlined"
          onChange={onChange}
          required
        />
      </Box>
      <Box
        sx={{
          minWidth: 120,
          "& > :not(style)": { m: 1, width: "45ch", mt: 4, mr: 5 },
        }}
      >
        <FormControl>
          <InputLabel id="choose-class">Class</InputLabel>
          <Select
            labelId="choose-class"
            id="choose-class-select"
            value={values.studentClass}
            label="Class"
            onChange={onChangeClass}
            required
          >
            <MenuItem value="Pre Nursery">Pre Nursery</MenuItem>
            <MenuItem value="Nursery 1A">Nursery 1A</MenuItem>
            <MenuItem value="Nursery 1B">Nursery 1B</MenuItem>
            <MenuItem value="Nursery 2A">Nursery 2A</MenuItem>
            <MenuItem value="Nursery 2B">Nursery 2B</MenuItem>
            <MenuItem value="Transition A">Transition A</MenuItem>
            <MenuItem value="Transition B">Transition B</MenuItem>
            <MenuItem value="Transition C">Transition C</MenuItem>
            <MenuItem value="Primary 1A">Primary 1A</MenuItem>
            <MenuItem value="Primary 1B">Primary 1B</MenuItem>
            <MenuItem value="Primary 2A">Primary 2A</MenuItem>
            <MenuItem value="Primary 2B">Primary 2B</MenuItem>
            <MenuItem value="Primary 3A">Primary 3A</MenuItem>
            <MenuItem value="Primary 3B">Primary 3B</MenuItem>
            <MenuItem value="Primary 4A">Primary 4A</MenuItem>
            <MenuItem value="Primary 4B">Primary 4B</MenuItem>
            <MenuItem value="Primary 5">Primary 5</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="DOB"
          onChange={onChange}
          value={values.DOB}
          id="outlined-basic"
          label="Date of Birth"
          variant="outlined"
        />
      </Box>
      <Box
        sx={{
          minWidth: 120,
          "& > :not(style)": { m: 1, width: "45ch", mt: 4, mr: 5 },
        }}
      >
        <FormControl>
          <InputLabel id="choose-state">State of orign</InputLabel>
          <Select
            labelId="choose-state"
            id="choose-state-select"
            value={values.stateOfOrigin}
            label="State of Origin"
            onChange={onChangeState}
          >
            {location.map((state, id) => {
              return (
                <MenuItem value={state.name} key={state.id}>
                  {state.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="choose-LGA">LGA</InputLabel>
          <Select
            labelId="choose-LGA"
            id="choose-LGA-select"
            value={values.LGA}
            label="LGA"
            onChange={onLocalSelect}
            disabled={values.stateOfOrigin === "" ? true : false}
          >
            
              return (
                <MenuItem value="lga" >
                  Ikom
                </MenuItem>
              );
            
          </Select>
        </FormControl>
      </Box>
      <Box
        component="div"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch", mr: 5, mt: 4 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="guardianName"
          id="outlined-basic"
          label="Guardian's name"
          variant="outlined"
          onChange={onChange}
          value={values.guardianName}
        />
        <TextField
          name="guardianPhone"
          id="outlined-basic"
          label="Guardian phonenumber"
          variant="outlined"
          type="number"
          onChange={onChange}
          value={values.guardianPhone}
        />
      </Box>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "45ch", mr: 5, mt: 4 },
        }}
      >
        <TextField
          name="schoolFees"
          id="outlined-basic"
          label="School Fees"
          type="text"
          variant="outlined"
          onChange={onNumberChange}
          value={values.schoolFees}
          required
        />
        <TextField
          name="admissionNumber"
          id="outlined-basic"
          label="Admission Number"
          variant="outlined"
          onChange={onChange}
          value={values.admissionNumber}
          required
        />
      </Box>

      <Box
        sx={{
          minWidth: 120,
          "& > :not(style)": { m: 1, width: "45ch", mt: 4, mr: 5 },
        }}
      >
        <FormControl>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gender"
            value={values.gender}
            onChange={onGenderSelect}
            required
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="permAddress"
          id="outlined-basic"
          label="Permanent Address"
          variant="outlined"
          onChange={onChange}
          value={values.permAddress}
        />
      </Box>

      <Button variant="contained" type="submit">
        Register Student
      </Button>
    </form>
  );
};

export default Newpupil;
