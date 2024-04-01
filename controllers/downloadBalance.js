const User = require("../schemas/user");

const downloadBalance = async (req, res) => {
  const userId = req.user._id; // Identyfikator aktualnie zalogowanego użytkownika

  try {
    // Znajdź aktualnie zalogowanego użytkownika
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "Nie znaleziono użytkownika" });
    }

    // Zwróć saldo użytkownika
    return res.status(200).json({ balance: user.balance });
  } catch (error) {
    console.error("Błąd podczas pobierania salda użytkownika:", error.message);
    return res.status(500).json({
      error: "Coś poszło nie tak podczas pobierania salda użytkownika",
    });
  }
};

module.exports = { downloadBalance };
