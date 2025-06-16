const pool = require("../db");

exports.getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT id, phone, balance FROM users ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.adjustProfit = async (req, res) => {
  const