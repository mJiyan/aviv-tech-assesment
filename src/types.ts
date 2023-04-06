export type Maybe<T> = T | null | undefined;

export type Property = {
    id: number,
    bedrooms_count: number,
    building_type: string,
    contact_phone_number: string,
    description?: string,
    latest_price_eur: number,
    name: string,
    postal_address: {
        city: string,
        country: string,
        postal_code: string,
        street_address: string
    },
    rooms_count: number,
    surface_area_m2: number,
    
    created_date: string,
    updated_date: string
}

export type PriceInformation = {
    created_date: string,
    price_eur: number
}
