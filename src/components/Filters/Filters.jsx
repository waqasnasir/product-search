import React from "react"
import { Input, Select, Col, Row } from "antd"
import { SearchBarContainer, StyledCheckBox } from "./styled"

const { Option } = Select

const { Search } = Input
const Filters = () => (
  <SearchBarContainer justify="space-between" gutter={[8, 16]}>
    <Col span={12}>
      <Search
        placeholder="Search Products"
        size="large"
        onSearch={() => {}}
        onChange={() => {}}
      />
    </Col>
    <Row>
      <Select defaultValue="" style={{ width: 120 }} onChange={() => {}}>
        <Option value="">Select</Option>
        <Option value="female">Female</Option>
        <Option value="male">Male</Option>
        <Option value="unisex">Unsex</Option>
      </Select>
      <StyledCheckBox onChange={() => {}}>Discounted Items</StyledCheckBox>
    </Row>
  </SearchBarContainer>
)

export default Filters
