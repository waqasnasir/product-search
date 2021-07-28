import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import React, { useState } from "react"
import { PageHeader, Button, Upload } from "antd"
import { UploadOutlined } from '@ant-design/icons';
import styled from "styled-components"
import Home from "./pages/Home/Home"
import Papa from "papaparse"

const Container = styled.div`
  padding: 30px 50px;
`

const StyledHeader = styled(PageHeader)`
.ant-page-header-heading {
  height: 85px;
}
`

function App() {

  const [uploading, setUploading] = useState(false)
  const [file, setFile] = useState()
  const props = {
    onRemove: () => {
      setFile();
    },
    beforeUpload: file => {
      setFile(file)
      return false
    },
    fileList: file && [file],
  };
  const handleImport = async () => {
    setUploading(true)
    Papa.parse(file, {
      complete: (data) => {
        console.log(data)
        setUploading(false)
        setFile()
      },
      error: (error) => {
        console.log(error)
        setUploading(false)
        setFile()
      }
    })
  }

  return (
    <Container>
      <BrowserRouter>
        <StyledHeader
          title={
            <Link to="/" style={{ color: "black" }}>
              Search Products
            </Link>
          }

          extra={[
            <Button
              type="primary"
              onClick={handleImport}
              disabled={!file}
              loading={uploading}
              style={{ marginTop: 16 }}
            >
              {uploading ? 'Importing' : 'Import products'}
            </Button>
            ,
            <Upload {...props} key="2" >
              <Button disabled={file} icon={<UploadOutlined />}>Select File</Button>
            </Upload>
          ]}
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
