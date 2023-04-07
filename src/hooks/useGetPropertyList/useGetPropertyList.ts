import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Maybe } from "@/types"
import { GetPropertyListResultType } from '@/redux/actions/Property/types';
import { RootStore } from "@/Store";
import { getPropertyList } from '@/redux/actions';

const useGetPropertyList = (): Maybe<GetPropertyListResultType> => {
    const isLoading = useRef(false);

    const dispatch = useDispatch();
    
    const { properties, property, loading } = useSelector((state: RootStore) => state.property);
  
    useEffect(() => {
      dispatch(getPropertyList());
      isLoading.current = loading;
  }, [isLoading.current, property]);

  return properties
}

export default useGetPropertyList