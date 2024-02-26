export interface ProductType {
    id?: number;
    name: string;
    price: number;
    createAt?: Date;
    categoryID: number;
    stock: number;
  }
  
  export interface CategoryType {
    id: number;
    name: string;
    products?: ProductType[];
  }


