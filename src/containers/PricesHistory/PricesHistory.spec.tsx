import React from 'react';
import { render } from '@testing-library/react';

import { mockReduxState } from '@/mock';

import PricesHistory from './PricesHistory';

jest.mock('react-redux', () => ({
  useSelector: () => mockReduxState,
  useDispatch: jest.fn()
}));

describe('<PricesHistory /> test suite', () => {
  it('Should render the <PricesHistory /> component', () => {
    const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null });
    const useEffectSpy = jest.spyOn(React, 'useEffect').mockReturnValueOnce();
    
    render(<PricesHistory />);
    
    expect(useEffectSpy).toHaveBeenCalledTimes(1)
    expect(useRefSpy).toHaveBeenCalledTimes(1)
  });
});
