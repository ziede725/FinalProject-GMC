const express = require("express");
const app = express();
const customerRoute = require("./routes/customerRoute");
const error = require("./middlewares/errorHandlerMiddleware");
//Configuration
require("dotenv").config();
require("./config/database");

//MiddleWares
app.use(express.json());
//Routes

app.use("/api/users", customerRoute);

app.use(error.errorHandelerMiddleware);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on ${port}`));
