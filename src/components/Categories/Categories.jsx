import { forwardRef } from 'react';
import styles from './styles.module.css';

const Categories = forwardRef(({ categories, setSelectedCategories, selectedCategories }, ref) => {
  return (
    <div ref={ref} className={styles.categories}>
      <button className={!selectedCategories ? styles.active : styles.item} onClick={() => setSelectedCategories(null)}>
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
});

Categories.displayName = 'Categories';

export default Categories;
