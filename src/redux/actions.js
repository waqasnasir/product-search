/* eslint-disable import/prefer-default-export */
import {
  LOAD_PRODUCTS,
  SET_SEARCH_TERM,
  SET_SELECTED_GENDER,
  TOGGLE_DISCOUNTED,
} from "./action-types"

export const loadProducts = (payload) => ({ type: LOAD_PRODUCTS, payload })
export const setSearchTerm = (payload) => ({ type: SET_SEARCH_TERM, payload })
export const setSelectedGender = (payload) => ({
  type: SET_SELECTED_GENDER,
  payload,
})
export const toggleDiscounted = (payload) => ({
  type: TOGGLE_DISCOUNTED,
  payload,
})
