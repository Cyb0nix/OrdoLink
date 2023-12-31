const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors({
  "origin": "*",
  "methods": "GET,PATCH,POST,PUT,DELETE,OPTIONS",
  "allowedHeaders": "X-Requested-With,Content-Type,Authorization"
}))

app.listen(process.env.WEB_PORT, function () {
    console.log('CORS-enabled web server listening on port ',process.env.WEB_PORT);
  })

app.get('/', function (request, response, next) {
    response.json({msg: 'This is CORS-enabled for all origins!'})
})

// MIDDLEWARE REGISTRATIONS
const bodyParser = require("body-parser");
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

// ROUTE REGISTRATIONS

app.use("/api/users", require("./routes/user.routes"));
app.use("/api/medecins", require("./routes/medecin.routes"));
app.use("/api/patients", require("./routes/patient.routes"));
app.use("/api/ordonnances", require("./routes/ordonnance.routes"));
app.use("/api/pharmaciens", require("./routes/pharmacien.routes"));

