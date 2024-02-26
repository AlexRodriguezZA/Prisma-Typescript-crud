import { Request, Response } from "express";
import { ProductType } from "../model/types";

import { getProducts, getProductById, deleteProductById, createProduct, updateProductById } from "../Services/productsServices";

import { productSchema } from "../schemas/productSchema";

export const handleGetAllProducts = async (_req: Request, res: Response) => {
  try {
    const products: ProductType[] = await getProducts();

    if (products.length === 0) {
      res.status(404).json({ message: "No se encontraron Productos" });
    } else {
      res.status(200).json(products);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const handleGetProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product: ProductType | null = await getProductById(Number(id));

    if (!product) {
      res.status(404).json({ message: "No se encontró el Producto" });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const handleDeleteProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product: ProductType | null = await deleteProductById(Number(id));

    if (!product) {
      res.status(404).json({ message: "No se encontró el Producto a eliminar" });
    } else {
      res.status(204).json(product);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};


export const handleCreateProduct = async (req: Request, res: Response) => {
  try {
    const dataProduct = productSchema.parse(req.body);
    const product: ProductType | null = await createProduct(dataProduct);

    if (!product) {
      res.status(404).json({ message: "No se encontró el Producto" });
    } else {
      res.status(201).json({ message: "Se creó el producto ",product } );
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};


export const handleUpdateProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const dataProduct = productSchema.parse(req.body);
    const product: ProductType | null = await updateProductById(Number(id), dataProduct);

    if (!product) {
      res.status(404).json({ message: "No se encontró el Producto a editar" });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
