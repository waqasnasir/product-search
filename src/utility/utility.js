export const getCollectionText = (gender) => {
  if (gender === "male") {
    return "Men's Collections"
  }
  if (gender === "female") {
    return "Women's Collections"
  }
  return "Men's/Women's Collection"
}

// utility function to filter products based on selected filters i.e searchTerm/gender/discounted
export const filterProducts = (
  products = [],
  searchTerm = "",
  selectedGender = "",
  discounted = false
) =>
  products.filter((product) => {
    const { title, gender, price, sale_price: salePrice } = product
    // here using indexOf instead of includes because includes is not supported in some browsers like IE
    const withSearchTerm =
      title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    const withGender = selectedGender ? gender === selectedGender : true
    const withDiscounted = discounted
      ? Number.parseFloat(price) > Number.parseFloat(salePrice)
      : true

    return withDiscounted && withGender && withSearchTerm
  })
