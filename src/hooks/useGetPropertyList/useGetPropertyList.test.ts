import React from 'react';

import { renderHook } from "@testing-library/react"
import { mockReduxState } from '@/mock';

import useGetPropertyList from "./useGetPropertyList"

jest.mock('react-redux', () => ({
    useSelector: () => mockReduxState,
    useDispatch: jest.fn()
}));

describe(useGetPropertyList.name, () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return a property prices from redux state", () => {
        const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null });
        const useEffectSpy = jest.spyOn(React, 'useEffect').mockReturnValueOnce();

        const { result: { current } } = renderHook(() => useGetPropertyList())

        expect(current).toEqual(mockReduxState.properties)
        expect(useEffectSpy).toHaveBeenCalledTimes(1)
        expect(useRefSpy).toHaveBeenCalledTimes(1)
    })
});
