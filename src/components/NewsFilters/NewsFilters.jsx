import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import styles from './styles.module.css';

const NewsFilters = ({ filters, chancgeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filters}>
      {dataCategories?.categories ? (
        <Slider step={200}>
          <Categories
            categories={dataCategories.categories}
            selectedCategories={filters.category}
            setSelectedCategories={category => chancgeFilter('category', category)}
          />
        </Slider>
      ) : null}
      <Search keywords={filters.keywords} setKeywords={keywords => chancgeFilter('keywords', keywords)} />
      {/* <NewsBanner isLoading={isLoading} item={data && data.news && data.news[0]} /> */}
    </div>
  );
};

export default NewsFilters;
