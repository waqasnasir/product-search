import React from "react"
import { useSelector } from "react-redux"
import { Spin } from "antd"
import { getProducts } from "../../redux/selectors"
import ProductList from "../../components/ProductList/ProductList"
import Filters from "../../components/Filters/Filters"

const Home = () => {
  const products = useSelector(getProducts)
  return (
    <Spin spinning={false}>
      <Filters />
      <ProductList products={products} />
    </Spin>
  )
}

export default Home
