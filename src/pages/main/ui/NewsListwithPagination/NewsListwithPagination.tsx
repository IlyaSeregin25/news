import { TOTAL_PAGES } from '@/shared/constant/constant';
import { Pagination } from '@/features/pagination';
import { NewsList } from '@/widgets/news';
import type { IFilters } from '@/shared/interfaces';
import type { INews } from '@/entities/news';
import { usePaginationNews } from '../../utils/hooks/usePaginationNews';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/app/appStrore';
import { setCurrentNews } from '@/entities/news/model/newsSlice';

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

const NewsListwithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } = usePaginationNews(filters);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

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
      <NewsList
        direction="column"
        type="item"
        isLoading={isLoading}
        news={news}
        viewNewsSlot={(news: INews) => <p onClick={() => navigateTo(news)}>view more ...</p>}
      />
    </Pagination>
  );
};

export default NewsListwithPagination;
