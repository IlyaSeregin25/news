import axios from 'axios';
import type { CategoriesApiResponse, NewsApiResponse, ParamsType } from '../interfaces';
import { categories, dataLatestNews, datassss } from './dataFromApi';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const Base_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
//1000 elem
//datassss          {status: 'ok',news: [{}..], page: 1,}
//dataLatestNews    {status: 'ok',news: [{}..], page: 1,}
//categories        ['regional', 'technology', ..]

export const getNews = async (params?: ParamsType): Promise<NewsApiResponse> => {
  try {
    const { page_number = 1, page_size = 10, category, keywords } = params || {};
    /* const response = await axios.get<NewsApiResponse>(`${Base_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        keywords,
      },
    });
    return response.data; */
    return await new Promise(resolve => {
      setTimeout(() => {
        let clone = structuredClone(datassss);
        let result, response;
        if (category) {
          result = datassss.news.filter(item => {
            let flag = false;
            item.category.forEach(elem => {
              if (elem === category) flag = true;
            });
            if (flag) return item;
          });
        }
        if (keywords) {
          result = datassss.news.filter(item => item.title.includes(keywords));
        }

        if (result !== undefined) {
          response = result.splice(page_number - 1, page_size); //[{},{}]
        } else {
          response = clone.news.splice(page_number - 1, page_size); //[{},{}]
        }
        resolve({ news: response });
      }, 500);
    });
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: 'error' };
  }
};

export const getLatestNews = async (): Promise<NewsApiResponse> => {
  try {
    /*     const response = await axios.get<NewsApiResponse>(`${Base_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data; */
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve({ news: dataLatestNews.news });
      }, 500);
    });
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: 'error' };
  }
};

export const getCategories = async (): Promise<CategoriesApiResponse> => {
  try {
    /*     const response = await axios.get<CategoriesApiResponse>(`${Base_URL}available/categories`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data; */
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve({ categories: categories });
      }, 500);
    });
  } catch (error) {
    console.log(error);
    return { news: [], description: '', status: 'error' };
  }
};
