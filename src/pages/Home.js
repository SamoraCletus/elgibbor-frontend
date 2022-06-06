import React from "react";
import "../styles/home.css";
import Box from "@mui/material/Box";
import Tables from "../components/Tables";
import { useQuery } from "@apollo/client";
import { GET_STUDENTS } from "../graphql";

const Home = () => {
  const { loading, error, data } = useQuery(GET_STUDENTS);
  // const {studentData, setStudentData} = useState([])
  // const { balance, setBalance } = useState('');

  // useEffect(() => {
  //   setStudentData(data)
  //  });
  if (loading) return "Loading...";

    let balances = data?.getStudents.map((student) => student.balance);
    let collectedFunds = data?.getStudents.map((student) => student.schoolFees);
    const outstandingBalance = balances.reduce((a, b) => a + b);
    const revenue = collectedFunds.reduce((a, b) => a + b);
    const totalRevenue = revenue - outstandingBalance;
  
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <div className="first-home">
        <Box
          className="card"
          sx={{
            width: 350,
            height: 160,
            backgroundColor: "#FF1450",
          }}
        >
          <h4>Total Amount Owed</h4>
          <h1>#{outstandingBalance}</h1>
        </Box>
        <Box
          className="card"
          sx={{
            width: 350,
            height: 160,
            backgroundColor: "#FF1450",
          }}
        >
          <h4>Total Amount collected</h4>
          <h1>#{totalRevenue}</h1>
        </Box>
      </div>
      <Tables />
    </div>
  );
};

export default Home;
