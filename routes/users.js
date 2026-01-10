const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());


app.post("/users", (req, res) => {
  const { name, email, age } = req.body;

  const sql = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
  db.query(sql, [name, email, age], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User created", id: result.insertId });
  });
});


app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});


app.get("/users/:id", (req, res) => {
  db.query(
    "SELECT * FROM users WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result[0]);
    }
  );
});


app.put("/users/:id", (req, res) => {
  const { name, email, age } = req.body;

  const sql =
    "UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?";
  db.query(sql, [name, email, age, req.params.id], err => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User updated" });
  });
});


app.delete("/users/:id", (req, res) => {
  db.query(
    "DELETE FROM users WHERE id = ?",
    [req.params.id],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "User deleted" });
    }
  );
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});