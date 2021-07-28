import { LOAD_PRODUCTS } from "./action-types"

const initialState = {
  products: [],
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: payload,
      }
    default:
      return state
  }
}

export default reducer
