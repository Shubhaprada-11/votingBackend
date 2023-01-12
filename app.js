const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();
const voterRoutes = require("./routes/voter");


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", voterRoutes);

app.listen(process.env.PORT, () => {
    console.log("listening on port:", process.env.PORT);
})