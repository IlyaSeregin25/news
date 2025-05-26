import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CategoriesApiResponse, NewsApiResponse, ParamsType } from '../../interfaces';
import { setNews } from '../slices/newsSlice';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const Base_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
//1000 elem
//datassss          {status: 'ok',news: [{}..], page: 1,}
//dataLatestNews    {status: 'ok',news: [{}..], page: 1,}
//categories        ['regional', 'technology', ..]

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: Base_URL }),
  endpoints: builder => ({
    getNews: builder.query<NewsApiResponse, ParamsType>({
      //query: (name) => `pokemon/${name}`,     //Простой запрос
      //keepUnusedDataFor: 0,
      query: params => {
        const { page_number = 1, page_size = 10, category, keywords } = params || {};
        //Обязательно должны вернуть объект return {url, params?, body?, headers?}
        return {
          url: 'search',
          params: {
            apiKey: API_KEY,
            page_number,
            page_size,
            category,
            keywords,
          },
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;
        dispatch(setNews(data.news));
      },
    }),
    getLatestNews: builder.query<NewsApiResponse, null>({
      query: () => {
        return {
          url: 'latest-news',
          params: {
            apiKey: API_KEY,
          },
        };
      },
    }),
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

export const { useGetNewsQuery, useGetLatestNewsQuery, useGetCategoriesQuery } = newsApi;
