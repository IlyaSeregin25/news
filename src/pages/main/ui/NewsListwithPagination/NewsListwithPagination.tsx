import { TOTAL_PAGES } from '@/shared/constant/constant';
import { Pagination } from '@/features/pagination';
import { NewsList } from '@/widgets/news';
import type { IFilters } from '@/shared/interfaces';
import type { INews } from '@/entities/news';
import { usePaginationNews } from '../../utils/hooks/usePaginationNews';

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

const NewsListwithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } = usePaginationNews(filters);

  return (
    <Pagination
      top
      bottom
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handlePageClick={handlePageClick}
    >
      <NewsList direction="column" type="item" isLoading={isLoading} news={news} />
    </Pagination>
  );
};

export default NewsListwithPagination;
