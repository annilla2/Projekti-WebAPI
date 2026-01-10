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
        url: "http://localhost:5000", // ndrysho nëse serverin e ke në port tjetër
      },
    ],
  },
  apis: ["./routes/product.js"], // ku ke route-et e produkteve
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };