/* eslint-disable react/jsx-props-no-spreading */
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import React from "react"
import { PageHeader } from "antd"
import styled from "styled-components"
import Home from "./pages/Home/Home"
import ImportProducts from "./components/ImportProducts/ImportProducts"

const Container = styled.div`
  padding: 30px 50px;
`
const StyledHeader = styled(PageHeader)`
  &.ant-page-header {
    padding: 0px;
  }
  .ant-page-header-heading {
    height: 85px;
  }
`
function App() {
  return (
    <Container>
      <BrowserRouter>
        <StyledHeader
          title={
            <Link to="/" style={{ color: "black" }}>
              Search Products
            </Link>
          }
          extra={[<ImportProducts />]}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default App
