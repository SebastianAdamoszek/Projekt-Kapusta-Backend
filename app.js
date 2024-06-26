// app.js

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const userRouter = require("./routes/userRouter");
const transactionRouter = require("./routes/transactionRouter");
// const { initializeFirebaseApp } = require("./firebase-server");

require("dotenv").config();

const server = express();

const formatsLogger = server.get("env") === "development" ? "dev" : "short";

server.use(logger(formatsLogger));
server.use(cors());
server.use(express.json());
server.use("/", userRouter);
server.use("/", transactionRouter);
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

server.get("/", (req, res) => {
  res.send("Server is working!");
});

server.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

server.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// initializeFirebaseApp();

module.exports = server;

// const express = require("express");
// const logger = require("morgan");
// const cors = require("cors");
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");
// const userRouter = require("./routes/userRouter");
// const transactionRouter = require("./routes/transactionRouter");
// require("dotenv").config();

// const app = express();

// const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// app.use(logger(formatsLogger));
// app.use(cors());
// app.use(express.json());
// app.use("/", userRouter);
// app.use("/", transactionRouter);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.get("/", (req, res) => {
//   res.send("Server is working!");
// });

// app.use((req, res) => {
//   res.status(404).json({ message: "Not found" });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({ message: err.message });
// });

// module.exports = app;
