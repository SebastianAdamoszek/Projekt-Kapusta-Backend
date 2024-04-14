const { findUserByEmail } = require("../services/user-service");

const logoutUser = async (req, res, next) => {
  const { email } = req.user;

  try {
    const user = await findUserByEmail({ email });
    console.log("wylogowany", user);
    if (user) {
      await user.save();
      res.status(200).json({
        message: "logout succesful",
        token: user.token,
        balance: user.balance,
        user: {
          email: user.email,
          name: user.name,
        },
      });
    } else {
      res
        .status(401)
        .json({ status: "Unauthorized", code: 401, message: "Not authorized" });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = { logoutUser };
