import React from "react";
import { Document } from "@react-pdf/renderer";
import { IItemDetail, IPrintDetail } from "../interfaces/ItemRecord";
import PageCustom from "./Page";

function CustomDocument({printDetails, date}: {printDetails: IPrintDetail[], date: string}) {
  
  function genPrintDocument() {
    var itemDetails : IItemDetail[] = []
    for (let i = 0; i < printDetails.length; i++) {
      if (printDetails[i].quantity <= 1) {
        itemDetails.push(printDetails[i])
      } else {
        for (let j = 0; j < printDetails[i].quantity; j++) {
          itemDetails.push(printDetails[i])
        }
      }
    }
    return itemDetails.map(itemDetail => <PageCustom itemDetail={itemDetail} date={date}/>)
  }

  return (
    <Document>
      {
        genPrintDocument()
      }
    </Document>
  )
}

export default CustomDocument;