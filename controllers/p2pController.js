const pool = require("../db");

exports.applyMerchant = async (req, res) => {
  const { userId, fullName, country, job, income } = req.body;

  try {
    await pool.query(
      "INSERT INTO p2p_merchants(user_id, full_name, country, job, monthly_income, status) VALUES($1, $2, $3, $4, $5, 'pending')",
      [userId, fullName, country, job, income]
    );
    res.json({ message: "Merchant application submitted!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};