const router = require("express").Router();
const { createCryptoPayment } = require("../controllers/paymentsController");

router.post("/crypto", createCryptoPayment);

module.exports = router;