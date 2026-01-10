import express from "express";
import dotenv from "dotenv";
import authRoutes from "./auth.routes.ts";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
