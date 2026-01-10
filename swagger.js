import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Fashion E-Commerce API",
      version: "1.0.0",
      description: "CRUD API documentation for products",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  // përdorim rrugën absolute tek product.js
  apis: [path.join(process.cwd(), "backend/routes/product.js")],
};

const specs = swaggerJsdoc(options);

// Eksporto si named exports për t’i përdorur në server.js
export { swaggerUi, specs };