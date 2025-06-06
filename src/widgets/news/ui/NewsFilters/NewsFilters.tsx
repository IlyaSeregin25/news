import { useAppDispatch } from '@/app/appStrore';
import { useTheme } from '@/app/providers/ThemeProvider';
import Categories from '@/features/category/ui/Categories/Categories';
import type { IFilters } from '@/shared/interfaces';
import { Slider } from '@/features/slider';
import { setFilters } from '@/entities/news/model/newsSlice';
import styles from './styles.module.css';
import { Search } from '@/features/search';
import type { CategoriesType } from '@/entities/category';

interface Props {
  filters: IFilters;
  categories: CategoriesType[];
}

const NewsFilters = ({ filters, categories }: Props) => {
  const dispatch = useAppDispatch();
  const { isDark } = useTheme();

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider step={200} isDark={isDark}>
          <Categories
            categories={categories}
            selectedCategories={filters.category}
            setSelectedCategories={category => dispatch(setFilters({ key: 'category', value: category }))}
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={keywords => dispatch(setFilters({ key: 'keywords', value: keywords }))}
      />
    </div>
  );
};

export default NewsFilters;
