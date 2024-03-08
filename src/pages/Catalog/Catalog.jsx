import { useEffect, useState } from 'react';
import { fetchCars } from '../../redux/operations';

function Catalog() {
  const [cars, setCars] = useState([]);
  const data = fetchCars();
  console.log('data', data);
  useEffect(() => {
    if (data) {
      setCars((prevCars) => [...prevCars, ...data]);
    }
  }, [data]);

  return <h1>Catalog page</h1>;
}
export default Catalog;
