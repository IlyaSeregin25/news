import { TOTAL_PAGES } from '../../constant/constant';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';
import styles from './styles.module.css';

const NewsByFilters = ({ filters, chancgeFilter, isLoading, news }) => {
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
      <Pagination
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
      />
      <NewsList isLoading={isLoading} news={news} />
      <Pagination
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
      />
    </section>
  );
};

export default NewsByFilters;
