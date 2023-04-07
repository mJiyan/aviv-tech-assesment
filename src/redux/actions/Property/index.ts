import { AxiosError } from "axios";
import { Dispatch } from "redux";

import { Property } from "@/types";

import { apiCall, HTTP, PROPERTY_API_END_POINT } from "@/api";

import {
    GET_PROPERTY_LIST_SUCCESS,
    GET_PROPERTY_LIST_FAIL,
    GET_PROPERTY_LIST_LOADING,
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
} from "./types";

export const getPropertyList = () => async (dispatch: Dispatch<GetPropertyListDispatchTypes>) => {
    try {
        dispatch({ type: GET_PROPERTY_LIST_LOADING });

        const { data } = await apiCall(
          {
              url: `${PROPERTY_API_END_POINT}/listings`,
              data: null,
              params: null,
              method: HTTP.GET,
              headers: {}
          }
        )
        dispatch(
          {
            type: GET_PROPERTY_LIST_SUCCESS,
            payload: data,
          }
        );
    } catch (e) {
        const error = e as Error | AxiosError;

        dispatch({
          payload: error.message,
          type: GET_PROPERTY_LIST_FAIL
        });
      }
}

export type UpdateData = Omit<Property, 
  "id" |  
  "updated_date"
>

export const addProperty = (updateData: UpdateData) => async (dispatch: Dispatch<AddPropertyDispatchTypes>) => {
    try {
        dispatch({ type: ADD_PROPERTY_LOADING });

        const { data } = await apiCall(
          {
            url: `${PROPERTY_API_END_POINT}/listings`,
            data: updateData,
            params: null,
            method: HTTP.POST,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
            }
          }
        )

        dispatch({
          type: ADD_PROPERTY_SUCCESS,
          payload: data,
        });
        
    } catch (e) {
        const error = e as Error | AxiosError;
        dispatch({
          payload: error.message,
          type: ADD_PROPERTY_FAIL
        });
      }
}

export const getPropertyPriceInformation = (propertyId: string) => async (dispatch: Dispatch<GetropertyPriceInformationDispatchTypes>) => {
    try {
        dispatch({ type: GET_PROPERTY_PRICE_INFORMATION_LOADING });

        const data: GetPropertyPriceInformationResultType = await apiCall(
            {
              url: `${PROPERTY_API_END_POINT}/listings/${propertyId}/prices`,
              data: null,
                params: null,
                method: HTTP.GET,
                headers: {}
            }
        )
        .then(({ data }) => data
        .map((key: any) => {
          return {
            created_date: key.created_date,
            price_eur: key.price_eur,
          };
        })
    );
    dispatch({ 
        payload: data,
        type: GET_PROPERTY_PRICE_INFORMATION_SUCCESS,
    });

    } catch (e) {
        const error = e as Error | AxiosError;
        dispatch({
          payload: error.message,
          type: GET_PROPERTY_PRICE_INFORMATION_FAIL
        });
      }
}
