import { render } from '@testing-library/react';

import { mockReduxState } from '@/mock';

import ListingCard from './ListingCard';

jest.mock('react-redux', () => ({
  useSelector: () => mockReduxState,
  useDispatch: jest.fn()
}));

describe('<ListingCard /> test suite', () => {
  it('Should render the <ListingCard /> component', () => {
    render(
      <ListingCard 
        latest_price_eur={mockReduxState.property.latest_price_eur} 
        id={mockReduxState.property.id} 
        building_type={mockReduxState.property.building_type} 
        surface_area_m2={mockReduxState.property.surface_area_m2} 
        rooms_count={mockReduxState.property.rooms_count} 
        postal_address={mockReduxState.property.postal_address} 
        description={mockReduxState.property.description} 
        updated_date={mockReduxState.property.updated_date} 
        />);
  });
});
