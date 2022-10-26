const express = require("express");

const app = express();
const cors = require("cors");
const {createToken, stkPush}= require("./controller/token")

// const TokenRoute = require("./routes/token");

app.listen(5000, () => {
  console.log("server run nicely");
});

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Mpesa programming in progress,Time to get paid");
});

// app.get("/generate",createToken )
app.post("/generate",createToken , stkPush)

// app.use("/token", TokenRoute, (req, res) => {
//   res.status(200).json({message: req.TokenRoute});
// });