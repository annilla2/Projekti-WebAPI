import express from "express";
import cors from "cors";
import productRoute from "./routes/product.js";
import { swaggerUi, specs } from "./swagger.js"; // import i saktë

const app = express();
app.use(cors());
app.use(express.json());

// Swagger middleware
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
console.log("Swagger UI should be available at http://localhost:5000/api-docs");

// CRUD routes
app.use("/products", productRoute);

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);