// backend/routes/users.js
import express from "express";
import db from "../db.js"; // sigurohu që db.js është gjithashtu me ES Module

const router = express.Router();

// POST create user
router.post("/", (req, res) => {
  const { name, email, age } = req.body;
  const sql = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
  db.query(sql, [name, email, age], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User created", id: result.insertId });
  });
});

// GET all users
router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// GET single user
router.get("/:id", (req, res) => {
  db.query("SELECT * FROM users WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
});

// PUT update user
router.put("/:id", (req, res) => {
  const { name, email, age } = req.body;
  const sql = "UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?";
  db.query(sql, [name, email, age, req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User updated" });
  });
});

// DELETE user
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM users WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User deleted" });
  });
});

// Kjo është e fundit
export default router;