import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Spin, List, Input } from "antd"
import { getProducts } from "../../redux/selectors"
import ProductTile from "../../components/ProductTile/ProductTile"
import { SearchBarContainer } from "./styled"

const { Search } = Input

const Home = () => {
  const [isLoading, setLoading] = useState(false)
  const products = useSelector(getProducts)
  const handleSearch = () => {
    setLoading(true)
  }

  return (
    <Spin spinning={isLoading}>
      <SearchBarContainer span={12} offset={6}>
        <Search
          placeholder="input search loading default"
          size="large"
          onSearch={handleSearch}
        />
      </SearchBarContainer>

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
          <List.Item key={item.title}>
            <ProductTile
              title={item.title}
              image={item.image_link}
              price={item.price}
              skuId={item.gtin}
              gender={item.gender}
              salePrice={item.sale_price}
              id={item.id}
            />
          </List.Item>
        )}
      />
    </Spin>
  )
}

export default Home
