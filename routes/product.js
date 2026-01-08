// backend/routes/products.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all products
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// GET single product by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM products WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
});

// CREATE product
router.post("/", (req, res) => {
  const { title, description, price, image, color, size, stock } = req.body;
  db.query(
    "INSERT INTO products (title, description, price, image, color, size, stock) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [title, description, price, image, color, size, stock],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ message: "Product created", productId: result.insertId });
    }
  );
});

// UPDATE product
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, price, image, color, size, stock } = req.body;
  db.query(
    "UPDATE products SET title=?, description=?, price=?, image=?, color=?, size=?, stock=? WHERE id=?",
    [title, description, price, image, color, size, stock, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Product updated" });
    }
  );
});

// DELETE product
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM products WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Product deleted" });
  });
});

module.exports = router;