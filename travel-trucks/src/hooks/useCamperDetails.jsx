import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCamperDetails, clearSelectedCamper } from '~/store/dataSlice';
import { getSelectedCamper, getIsLoading, getError } from '~/store/selectors';

const useCamperDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedCamper = useSelector(getSelectedCamper);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperDetails(id));
    }
    return () => {
      dispatch(clearSelectedCamper());
    };
  }, [dispatch, id]);

  return { selectedCamper, isLoading, error };
};

export default useCamperDetails;
