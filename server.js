const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/investments", require("./routes/investments"));
app.use("/api/dashboard", require("./routes/dashboard"));
app.use("/api/withdraw", require("./routes/withdraw"));
app.use("/api/p2p", require("./routes/p2p"));

app.listen(5000, () => console.log("Server live on port 5000"));