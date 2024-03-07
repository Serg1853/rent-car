import { useEffect, useState } from 'react';
import { useGetAdvertsQuery } from '../../redux/operations';

function Catalog() {
  const [cars, setCars] = useState([]);
  const data = useGetAdvertsQuery();
  console.log('data', data);
  useEffect(() => {
    if (data) {
      setCars((prevCars) => [...prevCars, ...data]);
    }
  }, [data]);

  return <h1>Catalog page</h1>;
}
export default Catalog;
