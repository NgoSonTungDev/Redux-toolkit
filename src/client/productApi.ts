import { instance } from "./index";
import { IProduct } from "../interface";

export const productApi = {
  getProducts: () => {
    return instance.get<IProduct[]>("/products");
  },

  createProduct: (data: IProduct) => {
    return instance.post<IProduct>("/products", data);
  },
};
