import { useState } from 'react';
import { compileVehicleDetails } from '~/common/components/CardDetails/helper';
import Gallery from '~/common/components/CardDetails/Gallery';
import TabButton from '~/common/components/CardDetails/TabButton';
import FeaturesTab from '~/common/components/CardDetails/FeaturesTab';
import ReviewsTab from '~/common/components/CardDetails/ReviewsTab';
import Booking from '~/common/components/Booking/Booking';
import { Star } from '~/common/components/icons/iconsIndex';
import Loader from '~/common/components/UI/Loader/Loader';
import { FormattedLocation, formatPrice } from '~/utils/FormatLabel';
import ErrorHandle from '~/utils/error';
import useCamperDetails from '~/hooks/useCamperDetails';
import { placeholderImages } from '~/utils/placeholder';
import styles from './index.module.css';

const tabs = [
  { id: 'features', label: 'Features' },
  { id: 'reviews', label: 'Reviews' },
];

const DetailsPage = () => {
  const [activeTab, setActiveTab] = useState('features');
  const { selectedCamper, isLoading, error } = useCamperDetails();

  if (isLoading) return <Loader isLoading={true} />;
  if (error) return <ErrorHandle error={error} />;
  if (!selectedCamper)
    return <div>No details available for selected camper</div>;

  const detailedInfo = compileVehicleDetails(selectedCamper);

  return (
    <div className={styles.selectedContainer}>
      <section key={selectedCamper.id}>
        <div className={styles.titleWrapper}>
          <h2>{selectedCamper.name}</h2>
          <div className={styles.itemsSubtitle}>
            <div className={styles.itemSubtitle}>
              <Star />
              <div className={styles.pointer}>
                {selectedCamper.rating}
                <span onClick={() => setActiveTab('reviews')}>
                  ({selectedCamper.reviews?.length || 0} Reviews)
                </span>
              </div>
            </div>
            <FormattedLocation location={selectedCamper.location} />
          </div>
          <h2>{formatPrice(selectedCamper.price)}</h2>
        </div>
        <Gallery
          images={selectedCamper.gallery}
          placeholderImages={placeholderImages}
        />
        <p className={styles.description}>{selectedCamper.description}</p>
      </section>
      <section className="detailsContainer">
        <nav className={styles.tabs}>
          {tabs.map(tab => (
            <TabButton
              key={tab.id}
              id={tab.id}
              label={tab.label}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </nav>
        <div className={styles.tabContentContainer}>
          <div>
            {activeTab === 'features' && (
              <FeaturesTab
                camper={selectedCamper}
                detailedInfo={detailedInfo}
              />
            )}
            {activeTab === 'reviews' && (
              <ReviewsTab reviews={selectedCamper.reviews} />
            )}
          </div>
          <Booking />
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;
