import React, { useContext } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { Box, InputLabel, MenuItem, FormControl, Select }from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ClassIcon from "@mui/icons-material/Class";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import { ClassContext } from "../../utils/RouteHandler";

const Sidebar = () => {
  const [classes, setClass] = React.useState("");
  const context = useContext(ClassContext);

  const handleChange = (event) => {
    setClass(event.target.value);
    context.changeClass(event.target.value);
  };
  return (
    <Box
      className="parent"
      sx={{
        width: 200,
        height: 900,
        position: "fixed",
      }}
    >
      <div className="menu-div">
        <HomeIcon />
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </div>

      <div className="menu-div">
        <PeopleIcon />
        <Link to="/displayPupils">
          <h2>All Pupils</h2>
        </Link>
      </div>

      <div className="menu-div">
        <ClassIcon />
        <Box className="select-classes" sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="select-class-label">Class</InputLabel>
            <Select
              labelId="select-class-label"
              id="select-class"
              value={classes}
              label="Class"
              onChange={handleChange}
            >
              <MenuItem value="Pre Nursery">
                <Link to="/classes/prenusery">Pre Nursery</Link>
              </MenuItem>
              <MenuItem value="Nursery 1A">
                <Link to="/classes/nursery1a">Nursery 1A</Link>
              </MenuItem>
              <MenuItem value="Nursery 1B">
                <Link to="/classes/nursery1b">Nursery 1B</Link>
              </MenuItem>
              <MenuItem value="Nursery 2A">
                <Link to="/classes/nursery2a">Nursery 2A</Link>
              </MenuItem>
              <MenuItem value="Nursery 2B">
                <Link to="/classes/nursery2b">Nursery 2B</Link>
              </MenuItem>
              <MenuItem value="Transition A">
                <Link to="/classes/transitnA">Transition A</Link>
              </MenuItem>
              <MenuItem value="Transition B">
                <Link to="/classes/transitnB">Transition B</Link>
              </MenuItem>
              <MenuItem value="Transition C">
                <Link to="/classes/transitnC">Transition C</Link>
              </MenuItem>
              <MenuItem value="Primary 1A">
                <Link to="/classes/primary1">Primary 1A</Link>
              </MenuItem>
              <MenuItem value="Primary 1B">
                <Link to="/classes/primary1b">Primary 1B</Link>
              </MenuItem>
              <MenuItem value="Primary 2A">
                <Link to="/classes/primary2">Primary 2A</Link>
              </MenuItem>
              <MenuItem value="Primary 2B">
                <Link to="/classes/primary2B">Primary 2B</Link>
              </MenuItem>
              <MenuItem value="Primary 3A">
                <Link to="/classes/primary3">Primary 3A</Link>
              </MenuItem>
              <MenuItem value="Primary 3B">
                <Link to="/classes/primary3B">Primary 3B</Link>
              </MenuItem>
              <MenuItem value="Primary 4A">
                <Link to="/classes/primary4">Primary 4A</Link>
              </MenuItem>
              <MenuItem value="Primary 4B">
                <Link to="/classes/primary4B">Primary 4B</Link>
              </MenuItem>
              <MenuItem value="Primary 5">
                <Link to="/classes/primary5">Primary 5</Link>
              </MenuItem>
              <MenuItem value="JSS 1">
                <Link to="/classes/jss-1">JSS 1</Link>
              </MenuItem>
              <MenuItem value="JSS 2">
                <Link to="/classes/jss-2">JSS 2</Link>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className="menu-div">
        <PeopleIcon />
        <Link to="/exStudents">
          <h2>ExStudents</h2>
        </Link>
      </div>
    </Box>
  );
};

export default Sidebar;
