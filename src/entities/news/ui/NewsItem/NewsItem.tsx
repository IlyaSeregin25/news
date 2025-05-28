import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo';
import styles from './styles.module.css';
import type { INews } from '../..';

interface Props {
  item: INews;
}

const NewsItem = ({ item }: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.wrapper} style={{ backgroundImage: `url(${item.image})` }}></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
