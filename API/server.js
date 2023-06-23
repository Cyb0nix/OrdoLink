const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
var cors = require('cors')
const app = express();

var corsOptions = {
    origin: process.env.FRONT_URL,
    credentials: true
    
  }

app.use(cors(corsOptions))

app.listen(process.env.WEB_PORT, function () {
    console.log('CORS-enabled web server listening on port ',process.env.WEB_PORT);
  })

app.get('/', function (request, response, next) {
    response.json({msg: 'This is CORS-enabled for all origins!'})
})

// MIDDLEWARE REGISTRATIONS
const bodyParser = require("body-parser");
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

const session = require("express-session");
app.use(session({
    secret: "SecretRandomStringDskghadslkghdlkghdghaksdghdksh",
    saveUninitialized: true,
    cookie: { 
        sameSite: 'none',
        maxAge: 1000 * 60 * 60 * 24}, // 1 day in msec
    resave: false
    
}));

// ROUTE REGISTRATIONS
const userRouter = require("./controllers/users.routes");
app.use("/api/users", userRouter);
