//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res, next) => {
  console.log(req.body);
  if (req.body["password"] === "ILoveProgramming") {
    app.post("/check", (req, res) => {
      res.sendFile(__dirname + "/public/secret.html");
    });
  } else {
    res.redirect("/");
  }
  next();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
