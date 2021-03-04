// Määritellään palvelimelle portti.
const PORT = process.env.PORT || 8081;

// Otetaan moduuleja käyttöön.
var express = require("express");
var app = express();

// otetaan EJS käyttöön
app.set("view engine", "ejs");

// Tällä pakotetaan sivupohja tuottamaan sisennettyä, kaunista HTML:ää. 
app.locals.pretty = true;

// Luodaan sivu. Res.render()-funktio lähettää sivut template-moottorille ennen niiden päätymistä loppukäyttäjälle selaimeen.
app.get("/", function(req, res) {
    res.render("pages/index");
  });

  app.get("/characters", function (req, res) {
    res.render("pages/characterpage");
});

app.get("/locations", function (req, res) {
    res.render("pages/locationpage");
});

app.get("/episodes", function (req, res) {
    res.render("pages/episodepage");
});

  // Luodaan web-palvelin.
app.listen(PORT, () => {
  console.log("Example app listening on port 8081!");
});