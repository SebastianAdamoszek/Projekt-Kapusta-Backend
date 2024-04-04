const Transaction = require("../schemas/transaction");

// Funkcja do obliczania sumy przychodów
const summaryIncome = async (req, res) => {
  const userId = req.user._id; // Identyfikator aktualnie zalogowanego użytkownika

  try {
    // Znajdź wszystkie przychody aktualnie zalogowanego użytkownika
    const income = await Transaction.find({
      userId: userId,
      operationType: "income",
    });
    console.log("Znalezione przychody:", income);

    // Oblicz sumę przychodów
    const sum = income.reduce((total, item) => total + item.amount, 0);

    // Zwróć sumę przychodów w odpowiedzi
    return res.status(200).json({ summaryIncome: sum });
  } catch (error) {
    // Obsłuż błąd, jeśli wystąpił
    console.error("Błąd podczas obliczania sumy przychodów:", error.message);
    return res.status(500).json({
      error: "Coś poszło nie tak podczas obliczania sumy przychodów",
    });
  }
};

module.exports = { summaryIncome };
