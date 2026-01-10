// backend/server.js
import express from "express";
import cors from "cors";
import productRoute from "./routes/product.js"; // pa "s"
import { swaggerUi, specs } from "./swagger.js"; // <--- shtim për swagger

const app = express();
app.use(cors());
app.use(express.json());

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Routes ekzistuese
app.use("/products", productRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));