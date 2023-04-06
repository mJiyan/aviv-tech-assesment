import { Property, PriceInformation } from "@/types"

export const GET_PROPERTY_LIST_SUCCESS = "GET_PROPERTY_LIST_SUCCESS"
export const GET_PROPERTY_LIST_FAIL = "GET_PROPERTY_LIST_FAIL"
export const GET_PROPERTY_LIST_LOADING = "GET_PROPERTY_LIST_LOADING"

export const ADD_PROPERTY_SUCCESS = "ADD_PROPERTY_SUCCESS"
export const ADD_PROPERTY_FAIL = "ADD_PROPERTY_FAIL"
export const ADD_PROPERTY_LOADING = "ADD_PROPERTY_LOADING"

export const GET_PROPERTY_PRICE_INFORMATION_SUCCESS = "GET_PROPERTY_PRICE_INFORMATION_SUCCESS"
export const GET_PROPERTY_PRICE_INFORMATION_FAIL = "GET_PROPERTY_PRICE_INFORMATION_FAIL"
export const GET_PROPERTY_PRICE_INFORMATION_LOADING = "GET_PROPERTY_PRICE_INFORMATION_LOADING"

export type GetPropertyListResultType = Property[]

export type GetPropertyPriceInformationResultType = PriceInformation[]

interface GetPropertyListSuccess {
    type: typeof GET_PROPERTY_LIST_SUCCESS,
    payload: GetPropertyListResultType
}

interface GetPropertyListFail {
    type: typeof GET_PROPERTY_LIST_FAIL,
    payload: string
}

interface GetPropertyListLoading {
    type: typeof GET_PROPERTY_LIST_LOADING,
}

interface AddPropertySuccess {
    type: typeof ADD_PROPERTY_SUCCESS,
    payload: Property
}

interface AddPropertyFail {
    type: typeof ADD_PROPERTY_FAIL,
    payload: string
}

interface AddPropertyLoading {
    type: typeof ADD_PROPERTY_LOADING,
}

interface GetPropertyPriceInformationSuccess {
    type: typeof GET_PROPERTY_PRICE_INFORMATION_SUCCESS,
    payload: GetPropertyPriceInformationResultType
}

interface GetPropertyPriceInformationFail {
    type: typeof GET_PROPERTY_PRICE_INFORMATION_FAIL,
    payload: string
}

interface GetPropertyPriceInformationLoading {
    type: typeof GET_PROPERTY_PRICE_INFORMATION_LOADING,
}

export type GetPropertyListDispatchTypes = GetPropertyListSuccess | GetPropertyListFail | GetPropertyListLoading
export type AddPropertyDispatchTypes = AddPropertySuccess | AddPropertyFail | AddPropertyLoading
export type GetropertyPriceInformationDispatchTypes = GetPropertyPriceInformationSuccess | GetPropertyPriceInformationFail | GetPropertyPriceInformationLoading
