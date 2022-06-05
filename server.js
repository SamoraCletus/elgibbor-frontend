// import express from "express";
// import path from "path";

// const app = express();

// const __dirname = path.resolve();
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// }

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
if (process.env.NODE_ENV) {
  //static folder add
  app.use(express.static("school-client"));
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "school-client/public", "index.html"));
  });
}
app.listen(port, () => {
  console.log("Server is up!");
});


