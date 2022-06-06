import React from "react";
import Header from "../components/navigation/Header";
import Sidebar from "../components/navigation/Sidebar";
import Grid from "@mui/material/Grid";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Newpupil from "../pages/Newpupil";
import Students from "../pages/Students";
import ExStudents from "../pages/ExStudents";
import AllExPupils from "../pages/AllExPupils";
import StudentProfile from "../pages/StudentProfile";
import ExStudentProfile from "../pages/ExStudentProfile";
import DisplayPupils from "../pages/DisplayPupils";

import Classes from "../pages/Classes";
const Layout = () => {
  return (
    <div>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={3} sx={{ borderRight: 1, borderColor: "grey.500" }}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/layout/students" element={<Students />} />
            <Route path="/exStudents" element={<ExStudents />} />
            <Route path="/addPupil" element={<Newpupil />} />
            <Route path="/displayPupils" element={<DisplayPupils />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/allExPupils" element={<AllExPupils />} />
            <Route path="/students/:studentName" element={<StudentProfile />} />
            <Route
              path="/exstudents/:studentName"
              element={<ExStudentProfile />}
            />
            <Route path="/classes/:className" element={<Classes />}></Route>
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
