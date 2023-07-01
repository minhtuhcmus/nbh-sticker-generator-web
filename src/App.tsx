import React, { useState } from 'react';
import './App.css';
import * as XLSX from "xlsx";
import { IPrintDetail } from './interfaces/ItemRecord';
import CustomDocument from './components/Document';
import {PDFViewer} from '@react-pdf/renderer';

function App() {

  const [printDetails, setPrintDetails] = useState<IPrintDetail[]>([]);
  const [date, setDate] = useState('');

  const readUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        // console.log(e.target?.result)
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json:IPrintDetail[] = XLSX.utils.sheet_to_json(worksheet);
        console.log(json);
        setPrintDetails(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  }



  return (
    <div className="App">
      <div className='data-input'>
        <input 
          type={"text"}
          placeholder="Ngày nhập hàng"
          onChange={e => {
            e.preventDefault();
            setDate(e.target.value)}}
        />
        <input type="file" onChange={(e) => readUploadFile(e)}/>
      </div>
      <PDFViewer width={'90%'} height={800}>
          <CustomDocument printDetails={printDetails} date={date}/>
        </PDFViewer>
    </div>
  );
}

export default App;
