import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo';
import styles from './styles.module.css';
import type { INews } from '../..';
import Image from '@/shared/ui/Image/Image';

interface Props {
  item: INews;
}

const NewsDetails = ({ item }: Props) => {
  return (
    <li className={styles.details}>
      <Image image={item.image} />
      <div className={styles.description}>
        <p>
          {item.description} ({item.language}){' '}
          <a target="_blank" href={item.url}>
            Read more
          </a>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>

        <ul>
          {item.category.map(category => {
            return <button className={styles.active}>{category}</button>;
          })}
        </ul>
      </div>
    </li>
  );
};

export default NewsDetails;
