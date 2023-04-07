import redux from 'react-redux';
import { renderHook } from "@testing-library/react"

import useAddProperty from "./useAddProperty"


jest.mock('react-redux', () => ({
    useDispatch: jest.fn()
}));

describe(useAddProperty.name, () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return a function to submit new property", () => {
        const useDispatchSpy = jest.spyOn(redux, 'useDispatch').mockImplementation()

        renderHook(() => useAddProperty())

        expect(useDispatchSpy).toHaveBeenCalledTimes(1)
    })


});
