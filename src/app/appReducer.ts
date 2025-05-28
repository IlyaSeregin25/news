import { combineReducers } from '@reduxjs/toolkit';
import newsReducer from '@/entities/news/model/newsSlice';
import { newsApi } from '@/entities/news/api/newsApi';
import { categoriesApi } from '@/entities/category/api/categoriesApi';

export const rootReduser = combineReducers({
  news: newsReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
});
