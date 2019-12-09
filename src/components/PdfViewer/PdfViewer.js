import React, { useState } from "react"
import { Page } from "react-pdf"
import useWindowDimensions from "utils/useWindowDimensions"

import Style from "./PdfViewer.style.js"

const PdfViewer = ({ pdf }) => {
  const { height, width } = useWindowDimensions()
  const [numPages, setNumPages] = useState(1)

  const onDocumentLoadSuccess = ({ _pdfInfo }) => {
    setNumPages(_pdfInfo.numPages)
  }

  const pdfPageWidth = Math.min(700, width * 0.8)
  const indexes = [...Array(numPages).keys()]

  return (
    <Style.Document
      file={pdf}
      onLoadSuccess={onDocumentLoadSuccess}
      height={height}
      width={pdfPageWidth}
    >
      {indexes.map(pageNum => {
        return (
          <Page
            pageNumber={pageNum + 1}
            width={pdfPageWidth}
            key={pageNum + 1}
          />
        )
      })}
    </Style.Document>
  )
}

export default PdfViewer
