const pool = require("../db");

exports.getTransactions = async (req, res) => {
  const { userId } = req.query;

  try {
    const result = await pool.query(
      "SELECT date, type, amount, status FROM transactions WHERE user_id=$1 ORDER BY date DESC",
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};