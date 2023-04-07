import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStore } from "@/Store";
import { getPropertyPriceInformation } from '@/redux/actions';

const useGetPricesHistory = (propertyId: string) => {
    const loading = useRef(false);

    const dispatch = useDispatch();
    
    const stateResult = useSelector((state: RootStore) => state.property);
  
    useEffect(() => {
      dispatch(getPropertyPriceInformation(propertyId as string));
      loading.current = stateResult.loading;
  }, [loading.current]);

  return stateResult
}

export default useGetPricesHistory