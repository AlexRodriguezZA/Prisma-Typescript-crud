import { ProductType } from "../model/types";
import { prisma } from "../BD/db";

export const getProducts = async (): Promise<ProductType[]> => {
  try {
    const products: ProductType[] = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.error("Error en la consulta a la base de datos", error);
    return [];
  }
};

export const getProductById = async (idProd: number): Promise<ProductType | null> => {
  try {
    const product: ProductType | null = await prisma.product.findFirst({
      where:{
        id:idProd 
      }
    });
    return product;
  } catch (error) {
    console.error("Error en la consulta a la base de datos", error);
    return null;
  }
};


export const deleteProductById = async (idProd: number): Promise<ProductType | null> => {
  try {
    const product: ProductType | null = await prisma.product.delete({
      where:{
        id:idProd 
      }
    });
    return product;
  } catch (error: any) {
    console.error("Error en la consulta a la base de datos", error.code);
    return null;
  }
};



export const createProduct = async (dataProduct: ProductType): Promise<ProductType | null> => {
  try {
    
     const product: ProductType | null = await prisma.product.create({
       data:{
         ...dataProduct
       }
     })
    return product;
  } catch (error: any) {
    console.error("Error en la consulta a la base de datos", error);
    return null;
  }
};




export const updateProductById = async (idProd: number, dataProduct: ProductType): Promise<ProductType | null> => {
  try {
    const product: ProductType | null = await prisma.product.update({
      where:{
        id: idProd 
      },
      data:{ 
        ...dataProduct
      }
    });
    return product;
  } catch (error: any) {
    console.error("Error en la consulta a la base de datos", error.code);
    return null;
  }
};
