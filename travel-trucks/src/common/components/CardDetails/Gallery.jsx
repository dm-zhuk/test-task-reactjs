import styles from '~/pages/DetailsPage/index.module.css';

const Gallery = ({ images = [], placeholderImages = [], maxImages = 4 }) => {
  const renderImages = () => {
    const galleryImages = Array.isArray(images) ? images : [];
    const safePlaceholderImages = Array.isArray(placeholderImages)
      ? placeholderImages
      : [];
    const placeholdersNeeded = maxImages - galleryImages.length;

    return [
      ...galleryImages.map((item, index) => (
        <div key={`gallery-${index}`} className={styles.imageContainer}>
          <img
            src={item.thumb}
            alt={`gallery ${index + 1}`}
            className={styles.galleryImage}
          />
        </div>
      )),
      ...Array.from({
        length: placeholdersNeeded > 0 ? placeholdersNeeded : 0,
      }).map((_, index) => (
        <div key={`placeholder-${index}`} className={styles.imageContainer}>
          <img
            src={
              safePlaceholderImages[index] ||
              'https://www.gettyimages.com/detail/photo/close-up-of-a-broswer-address-bar-royalty-free-image/184146944?searchscope=image%2Cfilm'
            }
            alt={`placeholder ${index + 1}`}
            className={styles.galleryImage}
          />
        </div>
      )),
    ];
  };

  return <div className={styles.gallery}>{renderImages()}</div>;
};

export default Gallery;
