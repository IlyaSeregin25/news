import { useAppDispatch } from '@/app/appStrore';
import { setFilters } from '@/entities/news/model/newsSlice';
import { TOTAL_PAGES } from '@/shared/constant/constant';
import type { IFilters } from '@/shared/interfaces';

export const usePaginationNews = (filters: IFilters) => {
  const dispatch = useAppDispatch();

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) dispatch(setFilters({ key: 'page_number', value: filters.page_number + 1 }));
  };
  const handlePreviousPage = () => {
    if (filters.page_number > 1) dispatch(setFilters({ key: 'page_number', value: filters.page_number - 1 }));
  };
  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: 'page_number', value: pageNumber }));
  };
  return { handleNextPage, handlePreviousPage, handlePageClick };
};
