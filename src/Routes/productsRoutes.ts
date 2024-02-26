import { Router } from "express";
import {
  handleGetAllProducts,
  handleGetProductById,
  handleDeleteProductById,
  handleCreateProduct,
  handleUpdateProductById
} from "../controllers/productControllers";

const router = Router();

router.get("/products", handleGetAllProducts);
router.get("/products/:id", handleGetProductById);
router.post("/products", handleCreateProduct);
router.delete("/products/:id", handleDeleteProductById);
router.put("/products/:id", handleUpdateProductById);



export default router;
