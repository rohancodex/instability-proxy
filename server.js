const express = require("express");
const app = express();
const port = 3000;

const proxy = require("pass-cors");
app.use("/proxy", proxy);

app.listen(port, () => console.log(`Proxy server listening on port ${port}!`));
