import { CategoryType } from "../model/types";
import { prisma } from "../BD/db";

export const getCategories = async (): Promise<CategoryType[]> => {
  try {
    const categories: CategoryType[] = await prisma.category.findMany({
      include: {
        products: true,
      },
    });
    return categories;
  } catch (error) {
    console.error("Error en la consulta a la base de datos", error);
    return [];
  }
};

export const getCategoryByID = async (idCat: number): Promise<CategoryType | null> => {
  try {
    const category: CategoryType | null = await prisma.category.findFirst({
      include: {
        products: true,
      },
      where: {
        id: idCat,
      },
    });
    return category;
  } catch (error) {
    console.error("Error en la consulta a la base de datos", error);
    return null;
  }
};

export const deleteCategoryByID = async (idCat: number): Promise<CategoryType | null> => {
  try {
    const category: CategoryType | null  = await prisma.category.delete({
      include: {
        products: true
      },
      where: {
        id: idCat
      }
    })
    return category;
  } catch (error) {
    console.error("Error en la consulta a la base de datos", error);
    return null;
  }
};


export const createCategory = async (name: string): Promise<CategoryType | null> => {
  try {
    const category: CategoryType | null = await prisma.category.create({
      include: {
        products: false
      },
      data:{
        name: name
      }
    })
    return category;
  } catch (error) {
    console.error("Error en la consulta a la base de datos", error);
    return null;
  }
};



export const updateCategoryByID = async (idCat: number, name: string): Promise<CategoryType | null> => {
  try {
    const category: CategoryType | null  = await prisma.category.update({
      where: {
        id: idCat
      },
      data:{
        name: name
      }
    })
    return category;
  } catch (error) {
    console.error("Error en la consulta a la base de datos", error);
    return null;
  }
};
