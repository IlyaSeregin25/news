import styles from './styles.module.css';

const Categories = ({ categories, setSelectedCategories, selectedCategories }) => {
  return (
    <div className={styles.categories}>
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
};

export default Categories;
