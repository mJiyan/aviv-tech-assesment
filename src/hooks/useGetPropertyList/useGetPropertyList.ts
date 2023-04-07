import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStore } from "@/Store";
import { getPropertyList } from '@/redux/actions';

const useGetPropertyList = () => {
    const loading = useRef(false);

    const dispatch = useDispatch();
    
    const stateResult = useSelector((state: RootStore) => state.property);
  
    useEffect(() => {
      dispatch(getPropertyList());
      loading.current = stateResult.loading;
  }, [loading.current, stateResult.property]);

  return stateResult
}

export default useGetPropertyList