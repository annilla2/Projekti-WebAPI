import express from "express";
import cors from "cors";
import productsRoute from "./routes/product.js"; // shiko path i saktë

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// route për produktet
app.use("/products", productsRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});