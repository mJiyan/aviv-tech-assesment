import { PriceInformation } from '@/types';
import { convertStringToDateAndLocalized, localizedPriceInformation } from '@/utils';
import styles from './price-history-card.module.scss';

const PriceHistoryCard: React.FC<PriceInformation> = ({
  created_date,
  price_eur
}) => {
  return (
    <div className={styles['container']}>
      <table className={styles['price-card']}>
        <tbody>
          <tr className={styles['price-card__header']}>
            <th scope="col">Date</th>
            <th scope="col">Price (eur)</th>
          </tr>
          <tr>
            <td>{convertStringToDateAndLocalized(created_date)}</td>
            <td>{localizedPriceInformation(price_eur)} €</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default PriceHistoryCard;
