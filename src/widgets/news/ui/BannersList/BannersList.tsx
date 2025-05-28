import withSkeleton from '@/shared/hocs/withSkeleton';
import { NewsBanner, type INews } from '@/entities/news';
import styles from './styles.module.css';

interface Props {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map(banner => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannersListWhithSkeleton = withSkeleton<Props>(BannersList, 'banner', 10, 'row');

export default BannersListWhithSkeleton;
