const Transaction = require("../schemas/transaction");

// Funkcja do obliczania sumy wydatków
const summaryExpenses = async (req, res) => {
  const userId = req.user._id; // Identyfikator aktualnie zalogowanego użytkownika

  try {
    // Znajdź wszystkie wydatki aktualnie zalogowanego użytkownika
    const expenses = await Transaction.find({
      userId: userId,
      operationType: "expenses",
    });
    console.log("Znalezione wydatki:", expenses);

    // Oblicz sumę wydatków
    const sum = expenses.reduce((total, expense) => total + expense.amount, 0);

    // Zwróć sumę wydatków w odpowiedzi
    return res.status(200).json({ summaryExpenses: sum });
  } catch (error) {
    // Obsłuż błąd, jeśli wystąpił
    console.error("Błąd podczas obliczania sumy wydatków:", error.message);
    return res.status(500).json({
      error: "Coś poszło nie tak podczas obliczania sumy wydatków",
    });
  }
};

module.exports = { summaryExpenses };
