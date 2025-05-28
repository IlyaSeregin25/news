import { useAppDispatch, useAppSelector } from '@/app/appStrore';
import styles from './styles.module.css';
import { useDebounce } from '@/shared/hooks/hooks';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { TOTAL_PAGES } from '@/shared/constant/constant';
import { setFilters } from '@/entities/news/model/newsSlice';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsListWhithSkeleton from '@/widgets/news/ui/NewsList/NewsList';
import { Pagination } from '@/features/pagination';

const NewsByFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(state => state.news.filters);

  const debounceKeywords = useDebounce(filters.keywords, 500);

  const { data, error, isLoading } = useGetNewsQuery({ ...filters, keywords: debounceKeywords });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) dispatch(setFilters({ key: 'page_number', value: filters.page_number + 1 }));
  };
  const handlePreviousPage = () => {
    if (filters.page_number > 1) dispatch(setFilters({ key: 'page_number', value: filters.page_number - 1 }));
  };
  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: 'page_number', value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />
      <Pagination
        top
        bottom
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
      >
        <NewsListWhithSkeleton isLoading={isLoading} news={data?.news} />
      </Pagination>
    </section>
  );
};

export default NewsByFilters;
