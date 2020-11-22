const express = require("express");
const app = express();
const path = require("path");
const { offerRouter } = require("./Routes/offerroutes");
const { eventsRoute } = require("./Routes/eventRoute");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "*");

  next();
};

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.zcmfs.mongodb.net/shukran?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("mongoose connected"));

const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, "shukran-react", "build")));
app.use(express.static(path.resolve(__dirname,"Routes","public")));
app.use(allowCrossDomain);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(offerRouter);
app.use(eventsRoute);

app.post("/adminlogin", (req, res) => {
  const { username, password } = req.body;

  if ("stdONU101" == password && username == "admin") {
    jwt.sign({ username }, "process.env.ACCESS_TOKEN", (err, token) => {
      if (err) res.status(500).send(err);
      jwt.sign(
        { username },
        "process.env.REFRESH_TOKEN",
        (err, REFRESH_TOKEN) => {
          res.json({
            username,
            ACCESS_TOKEN: token,
            REFRESH_TOKEN,
          });
        }
      );
    });
  } else {
    res.status(400).send("incorrect pwd or username");
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "shukran-react", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log("server started");
});
