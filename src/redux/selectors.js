const PLACE_HOLDER_ARRAY = []
const PLACE_HOLDER_OBJECT = []

const getFilters = (state) => state.filters || PLACE_HOLDER_OBJECT

export const getProducts = (state) =>
  state.filteredProducts || PLACE_HOLDER_ARRAY

export const getSearchTerm = (state) => getFilters(state).searchTerm || ""

export const getSelectedGender = (state) =>
  getFilters(state).selectedGender || ""

export const getDiscounted = (state) => getFilters(state).discounted || false
