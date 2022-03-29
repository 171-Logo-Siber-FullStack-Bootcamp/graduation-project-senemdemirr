const express = require('express');
const router = express.Router();
const model = require("../models/postgresqlModels")

// ROUTES
router.get("/products", model.getProducts)
router.post("/products", model.postProducts)
router.put("/products/:id", model.updateProduct);
router.delete("/products/:id", model.deleteProduct);

// Export
module.exports = router;