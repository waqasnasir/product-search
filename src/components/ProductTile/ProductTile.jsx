import React from "react"
import propTypes from "prop-types"
import { Tooltip } from "antd"
import { CustomCard, StyledLabel, StyledImage } from "./styled"
import { getCollectionText } from "../../utility/utility"

const { Meta } = CustomCard

const Blog = ({ title, price, image, skuId, gender, salePrice }) => (
  <CustomCard
    key={skuId}
    style={{ width: 300 }}
    cover={<StyledImage alt="example" width="300" height="250" src={image} />}
    actions={[
      <StyledLabel>Was: {price}</StyledLabel>,
      <StyledLabel>Now: {salePrice}</StyledLabel>,
    ]}
    hoverable
  >
    <Meta
      title={<Tooltip title={title}>{title}</Tooltip>}
      description={getCollectionText(gender)}
    />
    {}
  </CustomCard>
)

Blog.propTypes = {
  title: propTypes.string,
  image: propTypes.string,
  price: propTypes.string,
  skuId: propTypes.string,
  gender: propTypes.string,
  salePrice: propTypes.string,
}

Blog.defaultProps = {
  title: "",
  image: "",
  price: "",
  skuId: "",
  gender: "",
  salePrice: propTypes.string,
}

export default Blog
