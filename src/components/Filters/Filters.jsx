import React from "react"
import { Input, Select, Col, Row } from "antd"
import { useDispatch } from "react-redux"
import { SearchBarContainer, StyledCheckBox } from "./styled"
import {
  setSearchTerm,
  setSelectedGender,
  toggleDiscounted,
} from "../../redux/actions"

const { Option } = Select

const { Search } = Input
const Filters = () => {
  const dispatch = useDispatch()

  const handleSearch = (value) => {
    dispatch(setSearchTerm(value))
  }
  const handleGenderSelection = (value) => {
    dispatch(setSelectedGender(value))
  }
  const handleDiscountToggle = (e) => {
    const { checked } = e.target
    dispatch(toggleDiscounted(checked))
  }

  return (
    <SearchBarContainer justify="space-between" gutter={[8, 16]}>
      <Col xxl={{ span: 12 }} xs={{ span: 24 }} md={{ span: 12 }}>
        <Search
          placeholder="Search Products"
          size="large"
          onSearch={handleSearch}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Col>
      <Row>
        <Select
          defaultValue=""
          style={{ width: 120 }}
          onChange={handleGenderSelection}
        >
          <Option value="">Select</Option>
          <Option value="female">Female</Option>
          <Option value="male">Male</Option>
          <Option value="unisex">Unsex</Option>
        </Select>
        <StyledCheckBox onChange={handleDiscountToggle}>
          Discounted Items
        </StyledCheckBox>
      </Row>
    </SearchBarContainer>
  )
}

export default Filters
