/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react"
import { Button, Upload } from "antd"
import { UploadOutlined } from "@ant-design/icons"
import Papa from "papaparse"
import { useDispatch } from "react-redux"
import { loadProducts } from "../../redux/actions"

const ImportProducts = () => {
  const [uploading, setUploading] = useState(false)
  const [file, setFile] = useState()
  const dispatch = useDispatch()
  const props = {
    onRemove: () => {
      setFile()
    },
    beforeUpload: (selectedFile) => {
      setFile(selectedFile)
      return false
    },
    fileList: file && [file],
  }
  const handleImport = async () => {
    setUploading(true)
    Papa.parse(file, {
      header: true,
      complete: (data) => {
        dispatch(loadProducts(data.data))
        setUploading(false)
        setFile()
      },
      error: () => {
        setUploading(false)
        setFile()
      },
    })
  }
  return (
    <>
      <Button
        key="selectfile"
        type="primary"
        onClick={handleImport}
        disabled={!file}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? "Importing" : "Import products"}
      </Button>
      <Upload {...props} key="upload" id="selectFile">
        <Button disabled={file} icon={<UploadOutlined />}>
          Select File
        </Button>
      </Upload>
    </>
  )
}

export default ImportProducts
