import { formatValue } from '~/utils/FormatLabel';
import { badgeIcons, featureIcons } from '~/utils/filterIcons';
import styles from './index.module.css';

export const CardBadge = ({ detail, iconSet = 'badgeIcons' }) => {
  const [key, value] = Array.isArray(detail) ? detail : ['', ''];

  // Icon set selection based on iconSet prop
  const icons = iconSet === 'featureIcons' ? featureIcons : badgeIcons;
  const badge = icons.find(({ name }) => name === key);

  if (!badge || value === false) return null;
  const formattedValue = formatValue(value);

  return (
    <li className={styles.cardBadge}>
      <span className={styles.icon}>{badge.icon}</span>
      <span className={styles.value}>{formattedValue || badge.label}</span>
    </li>
  );
};

export default CardBadge;
