import { Request, Response } from "express";
import { CategoryType } from "../model/types";

import { getCategories, getCategoryByID, deleteCategoryByID, createCategory,updateCategoryByID } from "../Services/categoriesServices";

export const handleGetAllCategories = async (_req: Request, res: Response) => {
  try {
    const categorias: CategoryType[] = await getCategories();

    if (categorias.length === 0) {
      res.status(404).json({ message: "No se encontraron las cateogorias" });
    } else {
      res.status(200).json(categorias);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const handleGetCategorieByID = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const category: CategoryType | null = await getCategoryByID(Number(id));
    if (!category) {
      res.status(404).json({ message: "No se encontró la categoría" });
    } else {
      res.status(200).json({message: "Categoría encontradas", category});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const handleDeleteCategoryById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const category: CategoryType | null = await deleteCategoryByID(Number(id));
    if (!category) {
      res.status(404).json({ message: "No se encontró la categoría a eliminar" });
    } else {
      res.status(204).json({message: "Categoría Eliminada"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const handleCreateCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body
     const category: CategoryType | null = await createCategory(String(name));
     if (!category) {
       res.status(404).json({ message: "NO se pudo crear la categoría"});
     } else {
       res.status(201).json({ message: "Se creó con exitos la categoría", category: category});
     }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const handleUpdateCategoryById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name } = req.body
    const category: CategoryType | null = await updateCategoryByID(Number(id), String(name));
    if (!category) {
      res.status(404).json({ message: "No se encontró la categoría a editar" });
    } else {
      res.status(200).json({message: "Categoría Editada", category});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

