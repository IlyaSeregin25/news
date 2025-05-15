import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';

const Main = () => {
  const [news, setNaews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNaews(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  console.log(news);
  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
      <NewsList news={news} />
    </main>
  );
};

export default Main;
