/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { List } from "antd"
import propTypes from "prop-types"
import ProductTile from "../ProductTile/ProductTile"

const ProductList = ({ products }) => (
  <>
    <List
      size="large"
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      split={false}
      pagination={{
        pageSize: 100,
      }}
      dataSource={products}
      renderItem={(item) => (
        <List.Item key={item.gtin}>
          <ProductTile
            title={item.title}
            image={item.image_link}
            price={item.price}
            skuId={item.gtin}
            gender={item.gender}
            salePrice={item.sale_price}
          />
        </List.Item>
      )}
    />
  </>
)

ProductList.propTypes = {
  products: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string,
      gtin: propTypes.string,
      price: propTypes.string,
      sale_price: propTypes.string,
      image_link: propTypes.string,
      additional_image_links: propTypes.arrayOf(propTypes.string),
    })
  ),
}

ProductList.defaultProps = {
  products: [],
}
export default ProductList
