import { Router } from "express";
import {
  handleGetAllCategories,
  handleCreateCategory,
  handleGetCategorieByID,
  handleDeleteCategoryById,
  handleUpdateCategoryById
} from "../controllers/categoriesControllers";

const router = Router();

router.get("/categories", handleGetAllCategories);
router.get("/categories/:id", handleGetCategorieByID);

router.post("/categories", handleCreateCategory);
router.delete("/categories/:id", handleDeleteCategoryById);
router.put("/categories/:id", handleUpdateCategoryById);


export default router;
