const express = require("express");
const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => res.send("Welcome to the main endpoint"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
