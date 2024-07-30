import { Router } from "express";
import { createProducts, deleteProduct, getAllProduct, getDetailProduct, updateProduct } from "../controllers/products.js";

const productRouter =Router()
productRouter.post("/createProduct",createProducts)
productRouter.get("/getAllProducts",getAllProduct)
productRouter.get("/getDetailProducts/:id",getDetailProduct)
productRouter.put("/updateProducts/:id",updateProduct)
productRouter.delete("/deleteProducts/:id",deleteProduct)
export default productRouter
