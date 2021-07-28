/* eslint-disable import/prefer-default-export */
const PLACE_HOLDER_ARRAY = []
export const getProducts = (state) => state.posts || PLACE_HOLDER_ARRAY
