import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/products", productRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000 🚀");
});