const pool = require("../db");

exports.withdraw = async (req, res) => {
  const { userId, amount, method } = req.body;
  if (amount < 1) return res.status(400).json({ error: "Minimum withdrawal is $1" });

  const fee = +(amount * 0.01).toFixed(2);
  const finalAmount = amount - fee;

  try {
    await pool.query(
      "INSERT INTO withdrawals(user_id, amount, fee, method, status) VALUES($1, $2, $3, $4, 'pending')",
      [userId, finalAmount, fee, method]
    );
    res.json({ message: "Withdrawal request submitted." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};