import React from "react";
import "../styles/Tables.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, pupilName, presentClass, debt, fees) {
  return { name, pupilName, presentClass, debt, fees };
}

const rows = [
  createData("Edidiong Etok", "Primary 2", 9.0, 37),
  createData("Utibeima Etok", "Primary 2", 16.0, 24),
  createData("Esitima Jimmy", "Primary 2", 3.7, 67),
  createData("Ifiok Moses", "Primary 3", 16.0, 49),
  createData("Nsikan Isine", "Primary 4", 16.0, 24),
  createData("Ezekiel Patrick", "Primary 5", 6.0, 24),
  createData("Aniedi Ekanem", "Primary 1", 16.0, 49),
  createData("Imabong Anwana", "Primary 2", 16.0, 49),
  createData("Josephine Johnson", "Primary 3", 16.0, 24),
  createData("Esther Ekong", "Primary 2", 16.0, 49),
];

const Tables = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Debt</TableCell>
            <TableCell align="right">School fees</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.pupilName}</TableCell>
              <TableCell align="right">{row.presentClass}</TableCell>
              <TableCell align="right">{row.debt}</TableCell>
              <TableCell align="right">{row.fees}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
