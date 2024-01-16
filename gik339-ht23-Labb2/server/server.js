// Vi hämtar express
const express = require("express");
// Här skapar vi en ny Expressapp
const app = express();
// Här gör vi porten som servern ska lyssna på
const port = 3000;

// Här hämtar vi SQLite3
const sqlite3 = require("sqlite3").verbose();
// Vi gör en ny anslutning till databasen
const db = new sqlite3.Database("./gik339-labb2.db");

// Middleware för JSON-data
app.use(express.json());
// Middleware för URL-kodade data
app.use(express.urlencoded({ extended: false }));

// Middleware för CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

// GET_end users
app.get("/users", (req, res) => {
  console.log("Request received for /users");

  // SQL för hämntning av användare
  db.all("SELECT * FROM users", (err, rows) => {
    // Vid eventuellt fel så logga det och skicka ett felmeddelande
    if (err) {
      console.error("Database error:", err.message);
      return res.status(500).send(err.message);
    }

    console.log("Users retrieved from the database:", rows);
    // Skicka tillbaka data som svar
    res.send(rows);
  });
});

// Starta server koden:
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
