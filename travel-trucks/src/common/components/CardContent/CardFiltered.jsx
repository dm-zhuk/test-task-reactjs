import CardContent from './CardContent';
import ScrollToTop from '../UI/ScrollToTop/ScrollToTop';
import styles from './index.module.css';

const CardFiltered = ({ data = [], listRef }) => {
  return (
    <ul className={styles.catalogContainer} ref={listRef}>
      {data.length > 0 ? (
        data.map(item => <CardContent item={item} key={item.id} />)
      ) : (
        <div className={styles.notFound}>
          Please review your query and try again!
        </div>
      )}
      <ScrollToTop />
    </ul>
  );
};

export default CardFiltered;
