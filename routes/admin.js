const router = require("express").Router();
const { banUser, resetPassword, approveMerchant } = require("../controllers/adminController");

router.post("/ban-user", banUser);
router.post("/reset-password", resetPassword);
router.post("/approve-merchant", approveMerchant);

module.exports = router;