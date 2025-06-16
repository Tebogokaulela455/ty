const router = require("express").Router();
const { applyMerchant } = require("../controllers/p2pController");

router.post("/apply", applyMerchant);

module.exports = router;