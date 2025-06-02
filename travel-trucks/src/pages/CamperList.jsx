import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardFilter from '~/common/components/CardFilter/CardFilter';
import { fetchData } from '~/store/dataSlice';
import { getCampers, getIsLoading, getError } from '~/store/selectors';
import ErrorHandle from '~/utils/error';
import Loader from '~/common/components/UI/Loader/Loader';
import styles from './CatalogPage/index.module.css';

const CamperList = () => {
  const dispatch = useDispatch();
  const { campers } = useSelector(getCampers);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    if (campers.length === 0 && !isLoading) {
      dispatch(fetchData());
    }
  }, [dispatch, campers, isLoading]);

  if (error) return <ErrorHandle error={error} />;

  if (isLoading) return <Loader isLoading={true} />;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <CardFilter cards={campers} />
      </div>
    </div>
  );
};

export default CamperList;
