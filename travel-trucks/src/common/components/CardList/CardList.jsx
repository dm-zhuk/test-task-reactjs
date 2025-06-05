import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '~/store/dataSlice';
import { getCampers, getIsLoading, getError } from '~/store/selectors';
import { paginate } from '~/utils/pagination';
import { scrollTo } from '~/utils/scroller';
import Pagination from '~/utils/context';
import ErrorHandle from '~/utils/error';
import CardFilter from '../CardFilter/CardFilter';
import CardFiltered from '../CardContent/CardFiltered';
import Button from '../Buttons/Button';
import EmptyList from '../UI/EmptyList/EmptyList';
import Loader from '../UI/Loader/Loader';
import styles from './index.module.css';

const CardList = ({ filterCondition }) => {
  const dispatch = useDispatch();
  const { campers } = useSelector(getCampers);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const [filteredCampers, setFilteredCampers] = useState([]);
  const { currentPage, increasePage } = useContext(Pagination);
  const listRef = useRef();

  useEffect(() => {
    if (campers.length === 0 && !isLoading) {
      dispatch(fetchData());
    }
  }, [dispatch, campers, isLoading]);

  useEffect(() => {
    if (Array.isArray(campers)) {
      setFilteredCampers(campers.filter(filterCondition));
    }
  }, [campers, filterCondition]);

  const resetFilters = () => {
    setFilteredCampers(campers);
    if (campers.length === 0) {
      dispatch(fetchData());
    }
  };

  const { cards, isBtnVisible } = paginate(currentPage, filteredCampers);

  const handleLoadMore = () => {
    increasePage();
    scrollTo(listRef);
  };

  if (error) return <ErrorHandle error={error} />;

  if (isLoading) return <Loader isLoading={true} />;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <CardFilter
          cards={campers} // Pass full campers list
          setFilteredCards={setFilteredCampers}
        />
        {filteredCampers.length > 0 ? (
          <CardFiltered data={cards} listRef={listRef} />
        ) : (
          <EmptyList resetFilters={resetFilters} />
        )}
      </div>
      {isBtnVisible && (
        <Button
          className={styles.loadMore}
          text="Load more"
          onClick={handleLoadMore}
        />
      )}
    </div>
  );
};

export default CardList;
