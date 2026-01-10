// backend/swagger.js
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

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
  apis: ["./routes/product.js"], // 🔴 kjo është KYÇI
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };