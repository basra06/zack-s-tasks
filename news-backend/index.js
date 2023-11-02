const express = require('express')
const bodyParser =require('body-parser')
const path = require('path')
var cors = require('cors')
const app= express()
require('dotenv').config();
app.use(express.json());
var userRouter = require("./routes/topstories");


// View Engine Setup
// app.engine('handlebars', exphbs());
app.use(cors())
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//static files
// app.use('/uploads',express.static('uploads'))

//Routes
app.use("/nyt", userRouter );
app.get("/", (req, res)=>{
    // res.send("Hello Patriotic-Pro")
});


// Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var port = normalizePort(process.env.PORT || "9000");
app.set("port", port);
app.listen(port, ()=> console.log(`Server Started ... at port http://localhost:${port}`));

//function
function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }