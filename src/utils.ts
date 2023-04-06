import * as Yup from "Yup"

export const convertSnakeCaseToTitleCase = (snakeCaseValue: string) => 
    snakeCaseValue
        .replace(/^_*(.)|_+(.)/g, 
            (s, c, d) => c ? c.toUpperCase() : ' ' + d.toUpperCase())


export const formikObjectSchema = () => (
    Yup.object().shape({
        latest_price_eur: Yup.number().typeError('It must be a number').min(1, 'Price value must be greater than 0.'),
        surface_area_m2: Yup.number().typeError('It must be a number').min(1, 'Surface area must be greater than 0.'),
        building_type: Yup.string().required("Building type is required"),
        postal_address: Yup.object({
            street_address: Yup.string().required("Street address is required"),
            city: Yup.string().required("City is required"),
            postal_code: Yup.string().required("Postal code is required"),
            country: Yup.string().required("Country is required"),
        }),
        name: Yup.string().required("Name is required"),
        bedrooms_count: Yup.number().typeError('It must be a number'),
        rooms_count: Yup.number().typeError('It must be a number').min(1, 'Room count must be greater than 0.'),
        contact_phone_number: Yup.string().required("Contact phone number is required"),
    })
)

export const convertStringToDateAndLocalized = (dateStringValue: string) => (new Date(dateStringValue)).toLocaleDateString('zh-Hans-CN')

export const localizedPriceInformation = (price: number) => (price.toLocaleString('de-DE'))
 