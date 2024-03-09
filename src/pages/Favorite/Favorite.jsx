import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { useEffect, useState } from 'react';
import { Text, Wrapper, WrapperList } from './Favorite.styled';
import CarCard from '../../components/CarCard/CarCard';
import { LoadMore } from '../Catalog/Catalog.styled';

function Favorite() {
  const favoriteCars = useSelector(selectFavorites);
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);

  const loadMore = () => {
    const startIndex = page * 12;
    const nextCars = favoriteCars.favorites.slice(startIndex, startIndex + 12);
    setCars([...cars, ...nextCars]);
    setPage(page + 1);
  };

  useEffect(() => {
    const initialCars = favoriteCars.favorites.slice(0, 12);
    setCars(initialCars);
  }, [favoriteCars]);

  return (
    <>
      <Wrapper>
        <WrapperList>
          {cars.length ? (
            cars.map((favorite, index) => (
              <CarCard key={index} data={favorite} />
            ))
          ) : (
            <Text>Your favorite are currently empty...</Text>
          )}
          {favoriteCars.favorites.length > cars.length && (
            <LoadMore variant="text" onClick={loadMore}>
              Load more
            </LoadMore>
          )}
        </WrapperList>
      </Wrapper>
    </>
  );
}
export default Favorite;
