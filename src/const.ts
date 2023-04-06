export enum BuildingType {
    STUDIO = "studio",
    APARTMENT = "apartment",
    HOUSE = "house"
}

enum ListingFormFieldName {
    NAME= "name",
    CONTACT_PHONE_NUMBER = "contact_phone_number",
    POSTAL_ADDRESS = "postal_address",
    CITY = "city",
    STREET_ADDRESS = "street_address",
    POSTAL_CODE = "postal_code",
    DESCRIPTION = "description",
    COUNTRY = "country",
    BUILDING_TYPE = "building_type",
    LATEST_PRICE_EUR = "latest_price_eur",  
    SURFACE_AREA_M2 = "surface_area_m2",  
    ROOMS_COUNT = "rooms_count",
    BEDROOMS_COUNT = "bedrooms_count",

}

export const initialValues = {
    [ListingFormFieldName.NAME]: "",
    [ListingFormFieldName.LATEST_PRICE_EUR]: 0,
    [ListingFormFieldName.SURFACE_AREA_M2]: 0,
    [ListingFormFieldName.ROOMS_COUNT]: 0,
    [ListingFormFieldName.BEDROOMS_COUNT]: 0,
    [ListingFormFieldName.DESCRIPTION]: "",
    [ListingFormFieldName.CONTACT_PHONE_NUMBER]: "",
    [ListingFormFieldName.POSTAL_ADDRESS]: {
        [ListingFormFieldName.CITY]: "",
        [ListingFormFieldName.COUNTRY]: "",
        [ListingFormFieldName.POSTAL_CODE]: "",
        [ListingFormFieldName.STREET_ADDRESS]: "",
    },
    [ListingFormFieldName.BUILDING_TYPE]: BuildingType.STUDIO,

}