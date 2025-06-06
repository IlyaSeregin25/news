import { forwardRef, type ForwardedRef } from 'react';
import styles from './styles.module.css';
import type { CategoriesType } from '@/entities/category';

interface Props {
  categories: CategoriesType[];
  setSelectedCategories: (category: CategoriesType | null) => void;
  selectedCategories: CategoriesType | null;
}

const Categories = forwardRef(
  ({ categories, setSelectedCategories, selectedCategories }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button
          className={!selectedCategories ? styles.active : styles.item}
          onClick={() => setSelectedCategories(null)}
        >
          All
        </button>
        {categories.map(category => {
          return (
            <button
              key={category}
              className={selectedCategories === category ? styles.active : styles.item}
              onClick={() => setSelectedCategories(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  },
);

Categories.displayName = 'Categories';

export default Categories;
