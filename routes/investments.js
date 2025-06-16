const router = require("express").Router();
const { invest, calculate } = require("../controllers/investmentsController");

router.post("/submit", invest);
router.post("/calculate", calculate);

module.exports = router;