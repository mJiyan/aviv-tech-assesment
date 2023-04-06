import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootStore } from "@/Store";
import PricesHistoryCard from '@components/PriceHistoryCard';
import { getPropertyPriceInformation } from '@/redux/actions';

import styles from './prices-history.module.scss';

const PricesHistory = () => {

  const { propertyId } = useParams();

  const loading = useRef(false);

  const dispatch = useDispatch();
  
  const stateResult = useSelector((state: RootStore) => state.property);

  useEffect(() => {
    dispatch(getPropertyPriceInformation(propertyId as string));
    loading.current = stateResult.loading;
}, [loading.current]);

  return (
    <div className={styles['container']}>
      <h1>Prices History</h1>
      {stateResult?.propertyPrices && stateResult.propertyPrices.map((propertyPricesPrice) => (
        <PricesHistoryCard 
          created_date={propertyPricesPrice.created_date} 
          price_eur={propertyPricesPrice.price_eur} 
        />
      ))}

      <a href="/" className={styles['link']}>
        &larr; Back Home
      </a>
    </div>
  );
};
export default PricesHistory;
