require("dotenv").config();
const express = require("express");
const app = express();
require("./config/db");
require("./helpers/errorHandler.js");

const port = process.env.PORT || 7200;

//Error Handler(Keep as Last Middleware)
app.use((err, req, res, next) => {
  handleError(err, res);
});
app.listen(port, () => console.log(`Server is running on ${port}`));
