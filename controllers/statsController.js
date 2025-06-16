const pool = require("../db");

exports.getStats = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        (SELECT COUNT(*) FROM users) AS total_users, 
        (SELECT SUM(amount) FROM investments) AS total_invested,
        (SELECT SUM(amount) FROM withdrawals WHERE status='approved') AS total_withdrawn
    `);

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};