import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import type { CategoriesApiResponse, IFilters } from '../../interfaces';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import styles from './styles.module.css';

interface Props {
  filters: IFilters;
  chancgeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, chancgeFilter }: Props) => {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(getCategories);
  return (
    <div className={styles.filters}>
      {dataCategories ? (
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
