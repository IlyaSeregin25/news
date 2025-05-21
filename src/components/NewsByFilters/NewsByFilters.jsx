import { getNews } from '../../api/apiNews';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constant/constant';
import { useDebounce } from '../../helpers/hooks/hooks';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilters';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import styles from './styles.module.css';

const NewsByFilters = () => {
  const { filters, chancgeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debounceKeywords = useDebounce(filters.keywords, 500);

  //const { data, isLoading, error } = useFetch(getNews, {
  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debounceKeywords,
  });
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) chancgeFilter('page_number', filters.page_number + 1);
  };
  const handlePreviousPage = () => {
    if (filters.page_number > 1) chancgeFilter('page_number', filters.page_number - 1);
  };
  const handlePageClick = page => {
    chancgeFilter('page_number', page);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} chancgeFilter={chancgeFilter} />
      <PaginationWrapper
        top
        bottom
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
