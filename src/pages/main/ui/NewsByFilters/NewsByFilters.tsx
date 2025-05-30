import { useAppSelector } from '@/app/appStrore';
import styles from './styles.module.css';
import { useDebounce } from '@/shared/hooks/hooks';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { NewsFilters } from '@/widgets/news';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import NewsListwithPagination from '../NewsListwithPagination/NewsListwithPagination';

const NewsByFilters = () => {
  const filters = useAppSelector(state => state.news.filters);
  const news = useAppSelector(state => state.news.news);

  const debounceKeywords = useDebounce(filters.keywords, 500);
  const { isLoading } = useGetNewsQuery({ ...filters, keywords: debounceKeywords });

  const { data } = useGetCategoriesQuery(null);

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={data?.categories || []} />
      <NewsListwithPagination filters={filters} news={news} isLoading={isLoading} />
    </section>
  );
};

export default NewsByFilters;
