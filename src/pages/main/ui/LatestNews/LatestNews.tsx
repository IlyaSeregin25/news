import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import styles from './styles.module.css';
import BannersListWhithSkeleton from '@/widgets/news/ui/BannersList/BannersList';

const LatestNews = () => {
  const { data, error, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersListWhithSkeleton banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
