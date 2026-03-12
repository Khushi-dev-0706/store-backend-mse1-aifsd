const router = require("express").Router();
const c = require("../controllers/productController");

router.post("/products", c.createProduct);
router.get("/products", c.getProducts);

router.get("/products/search", c.searchProduct);
router.get("/products/category", c.filterByCategory);

router.get("/products/:id", c.getProductById);

router.put("/products/:id", c.updateProduct);
router.delete("/products/:id", c.deleteProduct);

module.exports = router;