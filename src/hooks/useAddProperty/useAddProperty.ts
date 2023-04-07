import { useDispatch } from 'react-redux';

import { addProperty } from '@/redux/actions';
import { SubmitProps } from '@/components/ListingForm/ListingForm';

const useAddProperty = () => {
    const dispatch = useDispatch();

    const submit: SubmitProps = (
      {
        latest_price_eur,  
        surface_area_m2,  
        building_type,
        postal_address: {
          city,
          street_address,
          postal_code,
          country
        },
        contact_phone_number,
        rooms_count,
        bedrooms_count,
        name,
        description,
      }
    ) => {
      dispatch(addProperty({
          latest_price_eur: Number(latest_price_eur),
          surface_area_m2: Number(surface_area_m2),
          building_type,
          postal_address: {
            street_address,
            city,
            postal_code,
            country
          },
          name,
          bedrooms_count,
          rooms_count,
          created_date: String(new Date()),
          contact_phone_number,
          description
       })
      )
    }

    return submit

}

export default useAddProperty