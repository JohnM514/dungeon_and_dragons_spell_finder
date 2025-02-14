import express from "express";

const app = express();
const port = 3000;

app.set(express.static("public"));

app.listen(port, () => {
  console.log("Server running on port " + port);
});
