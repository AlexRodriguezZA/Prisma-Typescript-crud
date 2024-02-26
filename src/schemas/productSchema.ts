import { z } from "zod"



export const productSchema = z.object({
  name: z.string().min(1),
  price: z.number().min(0),
  categoryID: z.number(),
  stock: z.number().min(0),
});

