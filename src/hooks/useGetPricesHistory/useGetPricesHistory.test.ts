import React from 'react';

import { renderHook } from "@testing-library/react"
import { mockReduxState } from '@/mock';

import useGetPricesHistory from "./useGetPricesHistory"

jest.mock('react-redux', () => ({
    useSelector: () => mockReduxState,
    useDispatch: jest.fn()
}));

describe(useGetPricesHistory.name, () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return a property prices from redux state", () => {
        const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null });
        const useEffectSpy = jest.spyOn(React, 'useEffect').mockReturnValueOnce();

        const { result: { current } } = renderHook(() => useGetPricesHistory("1"))

        expect(current).toEqual(mockReduxState.propertyPrices)
        expect(useEffectSpy).toHaveBeenCalledTimes(1)
        expect(useRefSpy).toHaveBeenCalledTimes(1)
    })
});
