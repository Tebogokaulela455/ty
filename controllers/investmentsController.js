const pool = require("../db");
const { getPlanInfo } = require("../utils/plans");

exports.invest = async (req, res) => {
  const { userId, amount, method } = req.body;
  const plan = getPlanInfo(amount);
  if (!plan) return res.status(400).json({ error: "Invalid amount." });

  try {
    await pool.query(
      "INSERT INTO investments(user_id, amount, daily, total, method) VALUES($1, $2, $3, $4, $5)",
      [userId, plan.amount, plan.daily, plan.total, method]
    );
    res.json({ message: "Your investment has started!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.calculate = (req, res) => {
  const { amount } = req.body;
  const plan = getPlanInfo(amount);
  if (plan) return res.json(plan);
  return res.status(400).json({ error: "Invalid plan" });
};