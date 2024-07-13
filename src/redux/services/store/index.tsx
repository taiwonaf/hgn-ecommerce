import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ICloudProduct,
  IGetProducts,
  IGetProductsResponse,
  IGetSingleProduct,
  ISingleCloudProduct,
} from "./types";

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({
    // credentials: "same-origin",
    prepareHeaders: (headers, { getState }) => {
      // headers.set("Cross-Origin-Opener-Policy", "same-origin");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IGetProductsResponse, IGetProducts>({
      query: (data) => ({
        url: `${process.env.NEXT_PUBLIC_API_URL}`,
        params: {
          organization_id: `${process.env.NEXT_PUBLIC_ORG_ID}`,
          reverse_sort: data?.params?.reverse_sort,
          page: data?.params?.page,
          size: data?.params?.size,
          Appid: `${process.env.NEXT_PUBLIC_APP_ID}`,
          Apikey: `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }),
    }),
    getSingleProduct: builder.query<ISingleCloudProduct, IGetSingleProduct>({
      query: (data) => ({
        url: `${process.env.NEXT_PUBLIC_API_URl_SINGLE}${data.productId}`,
        params: {
          organization_id: `${process.env.NEXT_PUBLIC_ORG_ID}`,
          Appid: `${process.env.NEXT_PUBLIC_APP_ID}`,
          Apikey: `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = storeApi;
