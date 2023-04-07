import { useParams } from 'react-router-dom';

import PricesHistoryCard from '@components/PriceHistoryCard';

import styles from './prices-history.module.scss';
import { useGetPricesHistory } from '@/hooks';

const PricesHistory = () => {
  const { propertyId } = useParams();
  const stateResult = useGetPricesHistory(propertyId as string);

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
