import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./auth.routes.ts";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
