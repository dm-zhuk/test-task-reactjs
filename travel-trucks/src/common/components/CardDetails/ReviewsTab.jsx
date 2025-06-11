import StarRating from '~/utils/StarRating';
import styles from '~/pages/DetailsPage/index.module.css';

const ReviewsTab = ({ reviews = [] }) => (
  <div className={styles.reviews}>
    {reviews.map((review, idx) => (
      <div key={idx} className={styles.review}>
        <div className={styles.reviewHeader}>
          <span className={styles.letter}>{review.reviewer_name[0]}</span>
          <div>
            <p className={styles.reviewerName}>{review.reviewer_name}</p>
            <span className={styles.reviewRating}>
              <StarRating reviewer_rating={review.reviewer_rating} />
            </span>
          </div>
        </div>
        <p>{review.comment}</p>
      </div>
    ))}
  </div>
);

export default ReviewsTab;
