exports.banUser = async (req, res) => {
  const { userId } = req.body;

  try {
    await pool.query("UPDATE users SET banned=true WHERE id=$1", [userId]);
    res.json({ message: "User banned successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};