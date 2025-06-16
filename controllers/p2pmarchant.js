exports.approveMerchant = async (req, res) => {
  const { merchantId } = req.body;

  try {
    await pool.query("UPDATE p2p_merchants SET status='approved' WHERE id=$1", [merchantId]);
    res.json({ message: "Merchant approved successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};