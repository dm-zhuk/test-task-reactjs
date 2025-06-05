import { CardBadge } from '~/common/components/CardBadge/CardBadge';
import styles from '~/pages/DetailsPage/index.module.css';

const FeaturesTab = ({ camper, detailedInfo }) => (
  <div className={styles.features}>
    <div className={styles.featuresDetails}>
      <ul className={styles.featuresList}>
        {camper &&
          Object.entries(camper).map(([key, value]) => (
            <CardBadge key={key} detail={[key, value]} />
          ))}
      </ul>
    </div>
    <div className={styles.vehicleDetails}>
      <h3>Vehicle details</h3>
      <ul className={styles.detailsList}>
        {detailedInfo.map((detail, index) => (
          <li key={index} className={styles.detail}>
            <span>{detail.name}</span>
            <span>{detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default FeaturesTab;
