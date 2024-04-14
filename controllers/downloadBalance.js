const User = require("../schemas/user");

const downloadBalance = async (req, res) => {
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "Nie znaleziono użytkownika" });
    }

    const balance = user.balance;
    console.log("Saldo użytkownika:", balance);

    return res.status(200).json({ balance });
  } catch (error) {
    console.error("Błąd podczas pobierania salda użytkownika:", error.message);
    return res.status(500).json({
      error: "Coś poszło nie tak podczas pobierania salda użytkownika",
    });
  }
};

module.exports = { downloadBalance };
