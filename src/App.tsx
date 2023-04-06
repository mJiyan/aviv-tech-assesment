import Header from '@components/Header/Header';
import { Listings, PricesHistory } from '@/containers/';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/listings/:propertyId/prices" element={<PricesHistory />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
