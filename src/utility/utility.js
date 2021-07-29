/* eslint-disable import/prefer-default-export */
export const getCollectionText = (gender) => {
  if (gender === "male") {
    return "Men's Collections"
  }
  if (gender === "female") {
    return "Women's Collections"
  }
  return "Men's/Women's Collection"
}
