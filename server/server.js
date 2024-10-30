const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRouter = require("./router/userRouter");
const itemsRouter = require("./router/ItemsRouter");

require('dotenv').config();
const connect = require("./db/connection");

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use("/api/user", userRouter);
app.use("/api/items", itemsRouter);

const port = process.env.PORT || 8080;

connect
  .then((res) => {
    app.listen(port, () => {
      console.log(`Server is runing on PORT: ${port}`);
    });
  })
  .catch((err) => {
    console.log(`DB erro: ${err}`);
  });
