import {
  LOAD_PRODUCTS,
  SET_SEARCH_TERM,
  SET_SELECTED_GENDER,
  TOGGLE_DISCOUNTED,
} from "./action-types"
import { filterProducts } from "../utility/utility"

const initialState = {
  allProducts: [],
  filteredProducts: [],
  filters: {
    searchTerm: "",
    selectedGender: "",
    discounted: false,
  },
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
        filteredProducts: payload,
      }
    case SET_SEARCH_TERM: {
      const { allProducts, filters } = state
      const { selectedGender, discounted } = filters
      const filteredProducts = filterProducts(
        allProducts,
        payload,
        selectedGender,
        discounted
      )
      return {
        ...state,
        filteredProducts,
        filters: {
          ...filters,
          searchTerm: payload,
        },
      }
    }
    case SET_SELECTED_GENDER: {
      const { allProducts, filters } = state
      const { searchTerm, discounted } = filters
      const filteredProducts = filterProducts(
        allProducts,
        searchTerm,
        payload,
        discounted
      )
      return {
        ...state,
        filteredProducts,
        filters: {
          ...filters,
          selectedGender: payload,
        },
      }
    }
    case TOGGLE_DISCOUNTED: {
      const { allProducts, filters } = state
      const { searchTerm, selectedGender } = filters
      const filteredProducts = filterProducts(
        allProducts,
        searchTerm,
        selectedGender,
        payload
      )
      return {
        ...state,
        filteredProducts,
        filters: {
          ...filters,
          discounted: payload,
        },
      }
    }
    default:
      return state
  }
}

export default reducer
