import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { Maybe } from "@/types"
import { GetPropertyPriceInformationResultType } from '@/redux/actions/Property/types';
import { RootStore } from "@/Store";
import { getPropertyPriceInformation } from '@/redux/actions';

const useGetPricesHistory = (propertyId: string): Maybe<GetPropertyPriceInformationResultType> => {
    const isLoading = useRef(false);

    const dispatch = useDispatch();
    
    const { propertyPrices, loading } = useSelector((state: RootStore) => state.property);
  
    useEffect(() => {
      dispatch(getPropertyPriceInformation(propertyId as string));
      isLoading.current = loading;
    }, [isLoading.current]);

  return propertyPrices
}

export default useGetPricesHistory