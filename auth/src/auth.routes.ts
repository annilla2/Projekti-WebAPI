import express from "express";
import { register, login } from "./auth.service";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    await register(name, email, password, role);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const ip = req.ip || "unknown";

  try {
    const token = await login(email, password, ip);
    res.json({ token });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;