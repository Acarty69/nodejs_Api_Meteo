const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const port = 3000;
const path = require("path");
const { weather } = require("./utils/weather");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
// console.log(__dirname);
// app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.send("<h1>Racine</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About</h1>");
// });

app.get("/", (req, res) => {
  res.render("home", {
    title: " je teste",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  const { location } = req.query;
  weather(location, (unit = "m"), (err, data) => {
    if (err) res.send(`il y a une erreur de type ${err}`);

    res.send(data);
  });
});

//pour erreur 404
// app.get("*", (req, res) => {
//   res.render("home");
// });

//pour erreur type 500

// app.use((err, req, res, next) => {
//   console.error(err, stack);
//   res.status(500).send("erreur regardez le terminale");
// });

// app.use((req, res, next) => {
//   res.status(404).send("Page introuvable");
// });

app.listen(port, () => {
  console.log("App listening");
});
