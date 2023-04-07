import React from 'react';
import { render } from '@testing-library/react';
import { mockReduxState } from '@/mock';

import Listings from './Listings';

jest.mock('react-redux', () => ({
  useSelector: () => mockReduxState,
  useDispatch: jest.fn()
}));

describe('<Listings /> test suite', () => {
  it('Should render the <Listings /> component', () => {
   jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null });
   jest.spyOn(React, 'useEffect').mockReturnValueOnce();
    
    render(<Listings />);
  });
});
