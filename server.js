const express = require("express");
const app = express();
const customerRoute = require("./routes/customerRoute");
//Configuration
require("dotenv").config();
require("./config/database");

//MiddleWares
app.use(express.json());

//Routes

app.use("/api/users", customerRoute);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on ${port}`));
