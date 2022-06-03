const express = require("express");
const { swishPayment } = require("./controllers/payment.controller");

const app = express();
const port = 4000;

app.get("/payment", swishPayment);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
