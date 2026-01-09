// backend/server.js
import express from "express";
import cors from "cors";
import productRoute from "./routes/product.js"; // pa "s"

const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));