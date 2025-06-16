const router = require("express").Router();
const { withdraw } = require("../controllers/withdrawController");

router.post("/request", withdraw);

module.exports = router;