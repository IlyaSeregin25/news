import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CategoriesApiResponse } from '..';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const Base_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

//categories        ['regional', 'technology', ..]

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: Base_URL }),
  endpoints: builder => ({
    getCategories: builder.query<CategoriesApiResponse, null>({
      query: () => {
        return {
          url: 'available/categories',
          params: {
            apiKey: API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
