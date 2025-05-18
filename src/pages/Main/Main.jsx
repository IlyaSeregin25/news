import styles from './styles.module.css';
import { getNews } from '../../api/apiNews';
import { useDebounce } from '../../helpers/hooks/hooks';
import { PAGE_SIZE } from '../../constant/constant';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilters';
import LatestNews from '../../components/LatestNews/LatestNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';

const Main = () => {
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

  console.log();
  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news} />
      <NewsByFilters filters={filters} chancgeFilter={chancgeFilter} isLoading={isLoading} news={data?.news} />
    </main>
  );
};

export default Main;
