import React from "react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { Document, Page } from "react-pdf"

import Style from "./PdfComponent.style"

const PdfComponent = ({ pdfUrl, date }) => (
  <Style.Wrapper>
    <Style.DateBanner>
      {format(new Date(date), "dd MMMM", { locale: fr })}
    </Style.DateBanner>
    <Document file={pdfUrl} className={"PdfComponent"}>
      <Page pageNumber={1} width={300} />
    </Document>
  </Style.Wrapper>
)

export default PdfComponent
