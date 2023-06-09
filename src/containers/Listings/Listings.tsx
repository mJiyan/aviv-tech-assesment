import ListingCard from '@components/ListingCard';
import ListingForm from '@components/ListingForm';
import { useAddProperty, useGetPropertyList } from '@/hooks';

import styles from './listings.module.scss';

const Listings = () => {
  const properties = useGetPropertyList();
  const submit = useAddProperty();
  
  return (
    <main className={styles['listings']}>
      <h1 className={styles['listings__title']}>Main Listings page</h1>
      <div className={styles['listings__wrapper']}>
        <aside className={styles['listings__aside']}>
          <h2 className={styles['listings__sub-title']}>Add a listing</h2>
          <div className={styles['listings__form']}>
            <ListingForm submit={submit} />
          </div>
        </aside>
        <section className={styles['listings__section']}>
          <h2 className={styles['listings__sub-title']}>Listings</h2>
          <div className={styles['listings__items']}>
          {properties ? properties.map((property) => (
            <ListingCard 
              key={property.id}
              id={property.id}
              latest_price_eur={property.latest_price_eur}
              building_type={property.building_type}
              surface_area_m2={property.surface_area_m2}
              rooms_count={property.rooms_count}
              postal_address={property?.postal_address}
              description={property.description}
              updated_date={property.updated_date}
            />
          )): 
          (
            <p> Property List is not valid </p>
          )
          }
          </div>
        </section>
      </div>
    </main>
  );
};

export default Listings;
