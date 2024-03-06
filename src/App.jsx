import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';
import { Layout } from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Favorite = lazy(() => import('./pages/Favorite/Favorite'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
