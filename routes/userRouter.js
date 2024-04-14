const express = require("express");
const userRouter = express.Router();
const { addUser } = require("../controllers/addUser");
const { loginUser } = require("../controllers/loginUser");
const { logoutUser } = require("../controllers/logoutUser");
const { currentUser } = require("../controllers/currentUser");
// const { updateInitialBalance } = require("../controllers/updateBalance");
const { downloadBalance } = require("../controllers/downloadBalance");
const { summaryExpenses } = require("../controllers/summaryExpenses");
const { summaryIncome } = require("../controllers/summaryIncome");

const { auth } = require("../config/passport-jwt");

userRouter.post("/registration", addUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", auth, logoutUser);
userRouter.get("/current", auth, currentUser);
// userRouter.patch("/user/balance", auth, updateInitialBalance);
userRouter.get("/user/balance", auth, downloadBalance);
userRouter.get("/summary/expenses", auth, summaryExpenses);
userRouter.get("/summary/income", auth, summaryIncome);

module.exports = userRouter;
