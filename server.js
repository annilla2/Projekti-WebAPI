// backend/server.js
import express from "express";
import cors from "cors";
import productRoute from "./routes/product.js"; // pa "s", përputhet me file-in

const app = express();
app.use(cors());
app.use(express.json());

// API endpoint për produktet
app.use("/products", productRoute); // URL mbetet /products, nuk ndryshon

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));