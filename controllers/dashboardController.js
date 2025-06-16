const pool = require("../db");

exports.getDashboard = async (req, res) => {
  const { userId } = req.query;
  try {
    const result = await pool.query(
      "SELECT balance, (SELECT SUM(amount) FROM investments WHERE user_id=$1) AS total_invested, (SELECT SUM(amount) FROM withdrawals WHERE user_id=$1) AS total_withdrawn FROM users WHERE id=$1",
      [userId]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};