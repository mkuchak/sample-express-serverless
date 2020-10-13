const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Start ExpressJS application

app.get("/", (req, res) => {
  const timeNow = Date(Date.now());
  res.status(200).send(timeNow.toString());
});

// End ExpressJS application

const args = process.argv.slice(2);
if (args[0] == "--express") {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Listening on https://localhost:${port}`);
  });
} else {
  module.exports = app;
}
