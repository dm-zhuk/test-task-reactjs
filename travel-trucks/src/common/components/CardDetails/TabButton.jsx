import clsx from 'clsx';
import styles from '~/pages/DetailsPage/index.module.css';

const TabButton = ({ id, label, activeTab, setActiveTab }) => (
  <button
    className={clsx(styles.tab, { [styles.active]: activeTab === id })}
    onClick={() => setActiveTab(id)}
  >
    {label}
  </button>
);

export default TabButton;
