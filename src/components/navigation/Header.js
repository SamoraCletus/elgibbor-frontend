import "./Header.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Box
      className="main"
      sx={{
        backgroundColor: "#40fe",
        display: "flex",
        // justifyContent: "space-between",
        position: "fixed",
        padding: 1
      }}
    >
      <div className="header-name">
        <h1>EL-Gibbor Nursery & Primary School</h1>
      </div>
      <div className="second-div">
        <Link to="/addPupil">
          <Button
            sx={{
              backgroundColor: "white",
              padding: 1.5,
              marginTop: 2,
              fontWeight: 600,
              color: "#40fe",
            }}
          >
            Add Pupils
          </Button>
        </Link>
        <Link to="/signup">
          <Button
            sx={{
              backgroundColor: "white",
              padding: 1.2,
              marginTop: 2,
              fontWeight: 600,
              color: "#40fe",
              marginLeft: 2,
            }}
          >
            Sign up
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default Header;
