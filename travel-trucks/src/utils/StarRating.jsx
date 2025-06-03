import { Star, StarGray } from '../common/components/icons/iconsIndex';

const StarRating = ({ reviewer_rating }) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>
          {index < reviewer_rating ? <Star /> : <StarGray />}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
