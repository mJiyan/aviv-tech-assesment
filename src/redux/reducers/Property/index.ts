import { Property } from "@/types";
import {
    GET_PROPERTY_LIST_SUCCESS,
    GET_PROPERTY_LIST_FAIL,
    GET_PROPERTY_LIST_LOADING,
    GetPropertyListResultType,
    GetPropertyListDispatchTypes,
    AddPropertyDispatchTypes,
    ADD_PROPERTY_LOADING,
    ADD_PROPERTY_SUCCESS,
    ADD_PROPERTY_FAIL,
    GetPropertyPriceInformationResultType,
    GetropertyPriceInformationDispatchTypes,
    GET_PROPERTY_PRICE_INFORMATION_SUCCESS,
    GET_PROPERTY_PRICE_INFORMATION_FAIL,
    GET_PROPERTY_PRICE_INFORMATION_LOADING,
} from "@/redux/actions/Property/types";

export interface DefaultState {
    loading: boolean;
    error?: boolean;
    errorMessage?: string;
    properties?: GetPropertyListResultType,
    property?: Property,
    propertyPrices?: GetPropertyPriceInformationResultType,
}

const defaultState: DefaultState = {
    loading: false,
    error: false,
}

type PropertyDispatchType = GetPropertyListDispatchTypes | GetropertyPriceInformationDispatchTypes | AddPropertyDispatchTypes

const propertyReducer = (
    state: DefaultState = defaultState,
    action: PropertyDispatchType,
): DefaultState => {
    switch (action.type) {
        case GET_PROPERTY_LIST_LOADING:
            return {
                ...state,
                loading: true,
            }
        case GET_PROPERTY_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                properties: action.payload,
            }
        case GET_PROPERTY_LIST_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
                error: true,
            }
        case ADD_PROPERTY_LOADING:
            return {
                ...state,
                loading: true,
            }
        case ADD_PROPERTY_SUCCESS:
            return {
                ...state,
                loading: false,
                property: action.payload,
            }
        case ADD_PROPERTY_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
                error: true,
            }
        case GET_PROPERTY_PRICE_INFORMATION_LOADING:
            return {
                ...state,
                loading: true,
            }
        case GET_PROPERTY_PRICE_INFORMATION_SUCCESS:
            return {
                ...state,
                loading: false,
                propertyPrices: action.payload,
            }
        case GET_PROPERTY_PRICE_INFORMATION_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
                error: true,
            }
        default:
            return state;
    }
}

export default propertyReducer
