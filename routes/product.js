import express from "express";
import db from "../db.js"; // lidhja me MySQL

const router = express.Router();

// GET all products
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
});

// GET single product
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    if (results.length === 0) return res.status(404).json({ message: "Product not found" });
    res.json(results[0]);
  });
});

// POST create product
router.post("/", (req, res) => {
  const { name, description, price, category, imageUrl, stock } = req.body;
  db.query(
    "INSERT INTO products (name, description, price, category, imageUrl, stock) VALUES (?, ?, ?, ?, ?, ?)",
    [name, description, price, category, imageUrl, stock],
    (err, results) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(201).json({ id: results.insertId, ...req.body });
    }
  );
});

// PUT update product
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, imageUrl, stock } = req.body;
  db.query(
    "UPDATE products SET name=?, description=?, price=?, category=?, imageUrl=?, stock=? WHERE id=?",
    [name, description, price, category, imageUrl, stock, id],
    (err) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json({ id, ...req.body });
    }
  );
});

// DELETE product
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM products WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: "Product deleted" });
  });
});

export default router;