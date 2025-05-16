import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';

const Main = () => {
  const [news, setNaews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage, pageSize) => {
    try {
      setIsLoading(true);
      const response = await getNews(currentPage, pageSize);
      setNaews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(currentPage, pageSize);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handlePageClick = page => {
    setCurrentPage(page);
    //if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  console.log();
  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton count={1} type={'banner'} />}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
      />
      {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type={'item'} />}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
      />
    </main>
  );
};

export default Main;
