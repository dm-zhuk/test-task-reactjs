import { Link } from 'react-router-dom';
import styles from './index.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 Not Found</h1>
      <h2 className={styles.subtitle}>
        Page does not exist, please modify your search
      </h2>
      <h3>
        <Link to="/catalog" className={styles.buttonLink}>
          ← Back to your selection page
        </Link>
      </h3>
    </div>
  );
};

export default NotFound;
