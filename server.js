require("dotenv").config({path: "./.env"});
const path = require('path') ; 
const express = require("express");
const cors = require("cors");
const app = express();
require("./config/db");
const errorHandler = require("./middlewares/error");
//Middlewares
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors());
app.use(express.json());
//Routes

if(process.env.NODE_ENV === "production")
{
  console.log('hello im here')
  app.use(express.static(path.join(__dirname,'/Client/build'))) ; 
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'Client','build','index.html'))
  })
} 

app.use("/api/admins", require("./routes/admin.route"));
app.use("/api/customers", require("./routes/customer.route"));
app.use("/api/theaters", require("./routes/theater.route"));
app.use("/api/sessions",require("./routes/sessions.route"))
app.use("/api/movies", require("./routes/movie.route"));
app.use("/api/genres", require("./routes/genre.route"));
app.use("/api/rooms", require("./routes/room.route"));
app.use("/api/screenings", require("./routes/screening.route"));
app.use("/api/reservations", require("./routes/reservation.route"));
app.use("/api/seats", require("./routes/seat.route"));
app.use("/api/reviews", require("./routes/review.route"));
app.use("/api/discounts", require("./routes/discount.route"));
app.use("/api/auth", require("./routes/googleAuth.route"));
// Route login for all users wih different roles 
app.use('/api/login', require("./routes/login.route"))
app.use("/test", require("./routes/test.route"));
// we need to implement the reset password in this route
app.use("/passwordReset",require("./routes/password.reset"));
app.use("/uploads",express.static("uploads"))


//Serve static assets in production ; 


//Error Handler(Keep as Last Middleware)
app.use(errorHandler);



const port = process.env.PORT || 3000 ;
app.listen(port, () => console.log(`Server is running on ${port}`));
