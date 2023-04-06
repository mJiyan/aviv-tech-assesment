import { Property } from '@/types';
import { convertStringToDateAndLocalized, localizedPriceInformation } from '@/utils';
import styles from './listing-card.module.scss';

type ListingCardProps = Omit<Property, 
  "name" | 
  "bedrooms_count" | 
  "contact_phone_number" | 
  "created_date" | 
  "bedrooms_count"
>

const ListingCard = ({
  id,
  latest_price_eur,
  building_type,
  surface_area_m2,
  rooms_count,
  postal_address: {
    city,
    postal_code,
    street_address
  },
  description,
  updated_date,
}: ListingCardProps) => {
  return(
    <article className={styles['listing-card']}>
      <span className={styles['listing-card__price']}>{localizedPriceInformation(latest_price_eur)} €</span>
      <ul className={styles['listing-card__properties']}>
        <li className={styles['listing-card__properties-item']}>{building_type}</li>
        <li className={styles['listing-card__properties-item']}>
          {surface_area_m2}m<sup>2</sup>
        </li>
        <li className={styles['listing-card__properties-item']}>{rooms_count}</li>
      </ul>
      <section className={styles['listing-card__address']}>
        <address>{street_address}, {postal_code}, {city}</address>
      </section>
      <section className={styles['listing-card__description']}>
        <h3>Property description: </h3>
        <p>
          {description}
        </p>
      </section>
      <div className={styles['listing-card__footer']}>
        <p className={styles['listing-card__reference']}>
          Ref: {id} <br />
          Last update: {convertStringToDateAndLocalized(updated_date)}
        </p>
        <a href={`listings/${id}/prices`} className={styles['listing-card__link']}>
          See history &rarr;
        </a>
      </div>
    </article>
  )};

export default ListingCard;
