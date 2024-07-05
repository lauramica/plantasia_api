require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const PORT = process.env.APP_PORT;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

routes(app);

app.listen(PORT, () => console.log(`${process.env.APP_DOMAIN}:${PORT}`));
