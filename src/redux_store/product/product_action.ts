import { createAsyncThunk } from "@reduxjs/toolkit";
import { productApi } from "../../client/productApi";
import { IProduct } from "../../interface";

export const getProducts = createAsyncThunk<IProduct[], void>(
  "product/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await productApi.getProducts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createProduct = createAsyncThunk<IProduct, IProduct>(
  "product/createProduct",
  async (data, { rejectWithValue }) => {
    try {
      const response = await productApi.createProduct(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
