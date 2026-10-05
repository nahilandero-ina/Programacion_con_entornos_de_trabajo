const express = require ("express");  
const router = express.Router(); 
const productControllers = require("../controllers/productControllers");


router.get("/", productControllers.productsList); 

router.get("/newProduct", productControllers.productForm);
router.post("/newProduct", productControllers.newProduct);

router.get("/editProduct/:id", productControllers.editForm);
router.put("/editProduct/:id", productControllers.editProduct);

router.delete("/delete/:id", productControllers.deleteProduct);


router.get("/detail/:id", productControllers.productDetail); 

module.exports = router; 