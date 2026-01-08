import express from "express";
const router = express.Router();

// GET all products
router.get("/", (req, res) => {
  res.send("GET all products");
});

// GET single product
router.get("/:id", (req, res) => {
  res.send(`GET product ${req.params.id}`);
});

// POST create product
router.post("/", (req, res) => {
  res.send("POST create product");
});

// PUT update product
router.put("/:id", (req, res) => {
  res.send(`PUT update product ${req.params.id}`);
});

// DELETE product
router.delete("/:id", (req, res) => {
  res.send(`DELETE product ${req.params.id}`);
});

export default router;