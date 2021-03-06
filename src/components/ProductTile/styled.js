import styled from "styled-components"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Card } from "antd"

export const CustomCard = styled(Card)`
  width: 100%;
  .ant-card-cover {
    height: 250px;
  }
`
export const StyledLabel = styled.div`
  color: #00000073;
  cursor: default;
`
export const StyledImage = styled(LazyLoadImage)`
  object-fit: contain;
`
