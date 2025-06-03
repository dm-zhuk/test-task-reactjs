import CardList from '~/common/components/CardList/CardList';
import { useSelector } from 'react-redux';
import { getFavorites } from '~/store/selectors';

const FavoritesPage = () => {
  const favorites = useSelector(getFavorites);

  const filterCondition = camper => favorites.includes(camper.id);

  return <CardList filterCondition={filterCondition} />;
};

export default FavoritesPage;
