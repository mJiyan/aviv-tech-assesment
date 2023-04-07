import { render } from '@testing-library/react';

import { mockReduxState } from '@/mock';

import ListingForm from '.';

jest.mock('react-redux', () => ({
  useSelector: () => mockReduxState,
  useDispatch: jest.fn()
}));

const mockSubmit = jest.fn();

describe('<ListingForm />', () => {
  it('Should render the listing form component', () => {
    render(<ListingForm submit={mockSubmit} />);
  });
});
