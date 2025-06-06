import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import styles from './styles.module.css';
import { NewsList } from '@/widgets/news';
import type { INews } from '@/entities/news';
import { useAppDispatch } from '@/app/appStrore';
import { setCurrentNews } from '@/entities/news/model/newsSlice';
import { useNavigate } from 'react-router-dom';

const LatestNews = () => {
  const { data, error, isLoading } = useGetLatestNewsQuery(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

  return (
    <section className={styles.section}>
      <NewsList
        type="banner"
        direction="row"
        news={data && data.news}
        isLoading={isLoading}
        viewNewsSlot={(news: INews) => <p onClick={() => navigateTo(news)}>view more ...</p>}
      />
    </section>
  );
};

export default LatestNews;
